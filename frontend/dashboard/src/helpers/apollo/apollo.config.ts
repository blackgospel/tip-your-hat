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
import jwtDecode from 'jwt-decode'

const API_URL = process.env.API_URL

const httpMiddleware = new HttpLink({
  uri: API_URL,
  credentials: 'include',
})

const errorMiddleware = onError((error) => {
  console.error('error', error)
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

      return !(Date.now() >= exp * 1000)
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

    if (!API_URL) {
      throw new Error('API URL not defined')
    }

    return fetch(API_URL, {
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
  handleResponse: () => (response: any) => {
    return response.json().then((json: any) => {
      return {
        accessToken: json.data.refreshToken.accessToken,
      }
    })
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
