import { ApolloError } from 'apollo-server-lambda'

class BadRequestError extends ApolloError {
  constructor(public message: string) {
    super('Something went wrong', 'BAD_REQUEST_ERROR', {
      formattedErrors: [{ message }],
    })
  }
}

export default BadRequestError
