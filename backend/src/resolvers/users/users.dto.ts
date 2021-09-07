import { IsEmail, IsString } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UserDto {
  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string

  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  name: string
}
