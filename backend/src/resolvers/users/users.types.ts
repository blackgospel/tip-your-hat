import { IsEmail, IsNotEmpty } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import IsOptional from 'middleware/is-optional-decorator'
import RoleValidation from 'middleware/role-validation-decorator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class DefaultUserInput {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  email?: string
}

@InputType()
export class GetUserInput extends DefaultUserInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string
}

@InputType()
export class CreateUserInput extends DefaultUserInput {
  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  password: string

  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  name: string

  @Field()
  @RoleValidation({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  role: number
}

@InputType()
export class UpdateUserInput extends DefaultUserInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email?: string

  @Field({ nullable: true })
  @IsOptional()
  name?: string

  @Field({ nullable: true })
  @RoleValidation({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  @IsOptional()
  role?: number
}

@InputType()
export class DeleteUserInput extends DefaultUserInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string
}

@InputType()
export class RestoreUserInput extends DefaultUserInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string
}

@InputType()
export class ForgottonPasswordRequestInput extends DefaultUserInput {}

@InputType()
export class ForgottonPasswordInput extends DefaultUserInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  password: string
}
