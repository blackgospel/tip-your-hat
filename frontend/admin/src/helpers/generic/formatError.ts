import { ApolloError } from '@apollo/client'
import arrToObj from './arrToObj'

const formatError = (error: ApolloError) => {
  // const [initial] = error.graphQLErrors
  // const type = 'field' in initial

  // if (type) {
  //   return { type: 'fieldError', formattedError: arrToObj(error, 'field') }
  // }

  const errors = error.graphQLErrors.map(({ message }) => ({
    message,
  }))

  return { type: 'error', formattedError: arrToObj(errors) }
}

export default formatError
