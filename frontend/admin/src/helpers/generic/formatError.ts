import { ApolloError } from '@apollo/client'
import arrToObj from './arrToObj'

const formatError = (error: ApolloError) => {
  const [initialError] = error.graphQLErrors
  const apiErrors = initialError.extensions?.formattedErrors

  const [initial] = apiErrors
  const type = 'field' in initial

  if (type) {
    return { type: 'fieldError', formattedError: arrToObj(apiErrors, 'field') }
  }

  return { type: 'error', formattedError: arrToObj(apiErrors) }
}

export default formatError
