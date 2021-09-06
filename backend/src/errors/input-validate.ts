import { ApolloError } from 'apollo-server-lambda'
import { ValidationError } from 'class-validator'

class InputValidationError extends ApolloError {
  reason = 'Invalid arguments provided'

  constructor(public errors: ValidationError[]) {
    super('Invalid arguments provided', 'INPUT_VALIDATION_ERROR', {
      formattedErrors: errors.map(({ property, constraints }) => {
        const message = constraints
          ? Object.values(constraints)[0]
          : this.reason
        return { message, field: property }
      }),
    })
  }
}

export default InputValidationError
