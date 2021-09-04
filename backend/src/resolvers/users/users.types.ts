import { Field, InputType } from 'type-graphql'

@InputType()
export class DefaultUserInput {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  email?: string
}

@InputType()
export class GetUserInput extends DefaultUserInput {}

@InputType()
export class CreateUserInput extends DefaultUserInput {
  @Field()
  password: string

  @Field()
  name: string
}

@InputType()
export class UpdateUserInput extends DefaultUserInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  role?: number
}

@InputType()
export class DeleteUserInput extends DefaultUserInput {}

@InputType()
export class RestoreUserInput extends DefaultUserInput {}

@InputType()
export class ForgottonPasswordRequestInput extends DefaultUserInput {}

@InputType()
export class ForgottonPasswordInput extends DefaultUserInput {
  @Field({ nullable: true })
  password: string
}
