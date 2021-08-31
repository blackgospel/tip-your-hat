import { Field, InputType } from 'type-graphql'
import User from './users.model'

@InputType()
export class DefaultUserInput {
  @Field()
  email: string

  fields: Partial<User>
}
