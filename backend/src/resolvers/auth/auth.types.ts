import { UserDto } from 'resolvers/users/users.dto'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
export class RegisterType {
  @Field()
  email: string

  @Field()
  password: string

  @Field()
  name: string
}

@InputType()
export class LoginType {
  @Field()
  email: string

  @Field()
  password: string
}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string

  @Field()
  user: UserDto
}

@ObjectType()
export class RefreshTokenResponse {
  @Field()
  success: boolean

  @Field()
  accessToken: string
}
