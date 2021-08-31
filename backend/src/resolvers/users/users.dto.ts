import { ObjectType, Field } from "type-graphql"

@ObjectType()
export class UserDto {
  @Field()
  id: string

  @Field()
  email: string

  @Field()
  name: string
}
