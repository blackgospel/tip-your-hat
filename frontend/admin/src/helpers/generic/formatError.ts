import { ApolloError } from '@apollo/client'
import arrToObj from './arrToObj'

const formatError = (error: ApolloError) => {
  const [initialError] = error.graphQLErrors
  if (!('extensions' in initialError))
    return {
      type: 'error',
      formattedError: { 0: [{ message: error.graphQLErrors[0].message }] },
    }

  const apiErrors = initialError.extensions?.formattedErrors

  const [initial] = apiErrors
  const type = 'field' in initial

  if (type) {
    return { type: 'fieldError', formattedError: arrToObj(apiErrors, 'field') }
  }

  return { type: 'error', formattedError: arrToObj(apiErrors) }
}

export default formatError
