import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { USER_ROLES } from 'constants/enums'

@ValidatorConstraint()
class RoleValidationConstraint implements ValidatorConstraintInterface {
  validate(role: number, _args: ValidationArguments) {
    return Object.values(USER_ROLES).includes(role)
  }
}

const RoleValidation = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RoleValidationConstraint,
    })
  }
}

export default RoleValidation
