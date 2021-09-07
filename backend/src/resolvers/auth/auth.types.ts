import { IsEmail, IsNotEmpty } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { UserDto } from 'resolvers/users/users.dto'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
export class DefaultAuthInput {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  email?: string
}

@InputType()
export class RegisterUserInput extends DefaultAuthInput {
  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  password: string

  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  name: string
}

@InputType()
export class LoginUserInput extends DefaultAuthInput {
  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  password: string
}

@InputType()
export class RevokeRefreshTokenInput extends DefaultAuthInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string
}

@ObjectType()
export class LoginUserOutput {
  @Field()
  accessToken: string

  @Field()
  user: UserDto
}

@ObjectType()
export class RefreshTokenOutput {
  @Field()
  success: boolean

  @Field()
  accessToken: string
}
