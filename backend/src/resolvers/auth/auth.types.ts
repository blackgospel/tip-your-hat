import { IsEmail, IsNotEmpty } from 'class-validator'
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
  password: string

  @Field()
  name: string
}

@InputType()
export class LoginUserInput extends DefaultAuthInput {
  @Field()
  @IsEmail(undefined, { message: 'Invalid email' })
  email: string

  @Field()
  @IsNotEmpty({ message: 'Invalid password' })
  password: string
}

@InputType()
export class RevokeRefreshTokenInput extends DefaultAuthInput {}

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
