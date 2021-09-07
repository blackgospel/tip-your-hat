import { ValidateIf, ValidationOptions } from 'class-validator'

const IsOptional = (validationOptions?: ValidationOptions) => {
  return ValidateIf((obj, value) => {
    return value !== null && value !== undefined && value !== ''
  }, validationOptions)
}

export default IsOptional
