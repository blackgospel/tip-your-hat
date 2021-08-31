import { formatDBResponse } from 'helpers/db-helpers'
import { verify } from 'jsonwebtoken'
import { UserDto } from 'resolvers/users/users.dto'
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  updateUserService,
} from 'resolvers/users/users.service'
import { getUserByEmail } from 'resolvers/auth/auth.service'
import { ApolloContext } from 'context/auth-context'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { DefaultUserInput } from './users.types'
import {
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXIST,
  USER_INCORRECT_FIELDS,
  USER_UPDATE_INCORRECT_FIELDS,
} from 'constants/error-messages'
import { isEmpty } from 'class-validator'
import { USER_ROLES } from 'constants/enums'
import BadRequestError from 'errors/bad-request'

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hello'
  }

  @Query(() => UserDto, { nullable: true })
  async getUser(@Ctx() context: ApolloContext) {
    const authorization = context.event.headers.authorization

    if (!authorization) {
      return null
    }

    try {
      const payload: any = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
      const user = await getUserByEmail(payload.email)

      return formatDBResponse(user, 'email', 'id')
    } catch (err) {
      console.log('err', err)
      return null
    }
  }

  @Mutation(() => UserDto)
  async createAdminUser(@Arg('options') options: DefaultUserInput) {
    const { email, fields } = options

    if (!email || !fields.password || !fields.name) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmail(email)

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ALREADY_EXISTS)
    }

    const user = await createUserService(
      email,
      fields.password,
      fields.name,
      USER_ROLES.ADMIN
    )

    return user
  }

  @Mutation(() => UserDto)
  async updateUser(@Arg('options') options: Partial<DefaultUserInput>) {
    const { email, fields } = options

    if (!email) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    if (!fields || isEmpty(fields)) {
      throw new BadRequestError(USER_UPDATE_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmail(email)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    const user = await updateUserService(
      existingUser.pk,
      existingUser.sk,
      fields
    )

    return user
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('options') options: Partial<DefaultUserInput>) {
    const { email } = options

    if (!email) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmail(email)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    await deleteUserService(existingUser.pk, existingUser.sk)

    return true
  }

  @Query(() => [UserDto])
  async users() {
    const users = await getAllUsersService()

    return formatDBResponse(users, 'email', 'id')
  }
}
