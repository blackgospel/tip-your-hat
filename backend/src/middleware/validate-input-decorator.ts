import { validate } from 'class-validator'
import BadRequestError from 'errors/bad-request'
import { GENERAL_ERRORS } from 'errors/error-messages'
import InputValidationError from 'errors/input-validate'
import { ClassType, createMethodDecorator } from 'type-graphql'

function ValidateArgs<T extends object>(Type: ClassType<T>) {
  return createMethodDecorator(async ({ args }, next) => {
    const { options } = args

    if (!options) {
      throw new BadRequestError(GENERAL_ERRORS.INVALID_PARAMETERES)
    }

    const instance = Object.assign(new Type(), options)
    const validationErrors = await validate(instance)

    if (validationErrors.length > 0) {
      throw new InputValidationError(validationErrors)
    }

    return next()
  })
}

export default ValidateArgs
