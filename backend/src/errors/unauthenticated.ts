import { ApolloError } from 'apollo-server-lambda'

class UnauthenticatedError extends ApolloError {
  constructor(public message: string) {
    super('User authenticated', 'UNAUTHENTICATED', {
      formattedErrors: [{ message }],
    })
  }
}

export default UnauthenticatedError
