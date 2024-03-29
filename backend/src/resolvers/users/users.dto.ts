import { IsBoolean, IsEmail, IsString } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { Field, ObjectType } from 'type-graphql'
import User from './users.model'

@ObjectType()
export class UserDto implements Partial<User> {
  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string

  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  name: string

  @Field()
  @IsBoolean({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  isDeleted: boolean
}

@ObjectType()
export class FullUserDto implements Partial<User> {
  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string

  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  email: string

  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  name: string

  @Field()
  createdAt: number

  @Field()
  role: number

  @Field()
  tokenVersion: number

  @Field()
  credits: number

  @Field()
  @IsBoolean({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  isDeleted: boolean
}
