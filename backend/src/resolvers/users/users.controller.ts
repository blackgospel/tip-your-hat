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
import { UserDto } from 'resolvers/users/users.dto'
import {
  createUserService,
  deleteUserPermanentService,
  deleteUserService,
  getAllUsersService,
  getUserByEmailService,
  getUserService,
  restoreUserService,
  updateUserService,
} from 'resolvers/users/users.service'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import {
  CreateUserInput,
  DeleteUserInput,
  GetUserInput,
  RestoreUserInput,
  UpdateUserInput,
} from './users.types'

@Resolver()
export class UserResolver {
  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Query(() => UserDto, { nullable: true })
  async getCurrentUser(@Ctx() context: ApolloContext) {
    const authorization = context.event.headers.authorization

    if (!authorization) {
      return null
    }

    try {
      const payload: any = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
      const user = await getUserService(payload.id)

      return formatDBResponse(user)
    } catch (err) {
      return null
    }
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Query(() => [UserDto])
  async getAllUsers() {
    const users = await getAllUsersService()

    return formatDBResponse(users)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Query(() => [UserDto])
  async getUser(@Arg('options') options: GetUserInput) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const users = await getUserService(id)

    return formatDBResponse(users)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => UserDto)
  async createUser(@Arg('options') options: CreateUserInput) {
    const { email, password, name, role } = options

    if (
      !email ||
      !name ||
      !password ||
      (role && !Object.values(USER_ROLES).includes(role))
    ) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmailService(email)

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ALREADY_EXISTS)
    }

    const user = await createUserService(
      email,
      password,
      name,
      role || USER_ROLES.BASIC
    )

    return formatDBResponse(user)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => UserDto)
  async updateUser(@Arg('options') options: UpdateUserInput) {
    const { id, email, name, role } = options

    if (!id || (role && !Object.values(USER_ROLES).includes(role))) {
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

    return formatDBResponse(user)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
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

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
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

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
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
