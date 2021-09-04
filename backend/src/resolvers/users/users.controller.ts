import { isEmpty } from 'class-validator'
import { USER_ROLES } from 'constants/enums'
import {
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXIST,
  USER_INCORRECT_FIELDS,
} from 'constants/error-messages'
import { ApolloContext } from 'context/auth-context'
import BadRequestError from 'errors/bad-request'
import { formatDBResponse } from 'helpers/db-helpers'
import { verify } from 'jsonwebtoken'
import { getUserByEmail } from 'resolvers/auth/auth.service'
import { UserDto } from 'resolvers/users/users.dto'
import {
  createUserService,
  deleteUserPermanentService,
  deleteUserService,
  getAllUsersService,
  getUserService,
  restoreUserService,
  updateUserService,
} from 'resolvers/users/users.service'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import {
  CreateUserInput,
  DeleteUserInput,
  GetUserInput,
  RestoreUserInput,
  UpdateUserInput,
} from './users.types'

@Resolver()
export class UserResolver {
  @Query(() => UserDto, { nullable: true })
  async getCurrentUser(@Ctx() context: ApolloContext) {
    const authorization = context.event.headers.authorization

    if (!authorization) {
      return null
    }

    try {
      const payload: any = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
      const user = await getUserByEmail(payload.email)

      return formatDBResponse(user)
    } catch (err) {
      console.log('err', err)
      return null
    }
  }

  @Query(() => [UserDto])
  async getAllUsers() {
    const users = await getAllUsersService()

    return formatDBResponse(users)
  }

  @Query(() => [UserDto])
  async getUser(@Arg('options') options: GetUserInput) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const users = await getUserService(id)

    return formatDBResponse(users)
  }

  @Mutation(() => UserDto)
  async createAdminUser(@Arg('options') options: CreateUserInput) {
    const { email, password, name } = options

    if (!name || !email || !password) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmail(email)

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ALREADY_EXISTS)
    }

    const user = await createUserService(
      email,
      password,
      name,
      USER_ROLES.ADMIN
    )

    return formatDBResponse(user)
  }

  @Mutation(() => UserDto)
  async updateUser(@Arg('options') options: UpdateUserInput) {
    const { id, email, name, role } = options

    if (!id || (role && Object.values(USER_ROLES).includes(role))) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserService(id)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    const user = await updateUserService(existingUser.pk, {
      email,
      name,
      role,
    })

    return user
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('options') options: DeleteUserInput) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserService(id)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    await deleteUserService(existingUser.pk)

    return true
  }

  @Mutation(() => Boolean)
  async deleteUserPermanently(@Arg('options') options: DeleteUserInput) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserService(id)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    await deleteUserPermanentService(existingUser.pk)

    return true
  }

  @Mutation(() => Boolean)
  async restoreUser(@Arg('options') options: RestoreUserInput) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserService(id)

    if (!existingUser || isEmpty(existingUser)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    await restoreUserService(existingUser.pk)

    return true
  }
}
