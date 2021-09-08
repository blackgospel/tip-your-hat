import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import { ACCESS_TOKEN_KEY } from 'constants/auth'
import dotenv from 'dotenv'
import jwtDecode from 'jwt-decode'

dotenv.config()

const API_URL = process.env.API_URL

const httpMiddleware = new HttpLink({
  uri: API_URL,
  credentials: 'include',
})

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((error) => {
      // console.log('[GraphQL Error]', error.extensions?.formattedErrors)
    })

  if (networkError) {
    // console.log('[Network Error]', networkError)
  }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
    },
  }))

  return forward(operation)
})

const refreshTokenMiddleware = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)

    if (!token) {
      return true
    }

    try {
      const { exp } = jwtDecode(token) as any
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }
  },
  fetchAccessToken: () => {
    const query = `
      mutation RefreshAccessToken {
        refreshToken {
          accessToken
        }
      }
    `
    return fetch(API_URL!, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
  },
  handleResponse: (_operation, _accessTokenField) => (response: any) => {
    return response.json().then((json: any) => ({
      accessToken: json.data.refreshToken.accessToken,
    }))
  },
  handleFetch: (accessToken) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.error(err)
  },
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    refreshTokenMiddleware,
    errorMiddleware,
    authMiddleware,
    httpMiddleware,
  ]),
})

export default client
