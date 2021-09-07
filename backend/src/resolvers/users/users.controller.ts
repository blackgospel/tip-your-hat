import { isEmpty } from 'class-validator'
import { USER_ROLES } from 'constants/enums'
import BadRequestError from 'errors/bad-request'
import { USER_ERRORS } from 'errors/error-messages'
import { formatDBResponse } from 'helpers/db-helpers'
import CurrentContextUser from 'middleware/current-context-user-decorator'
import UserExist from 'middleware/user-exist-decorator'
import ValidateArgs from 'middleware/validate-input-decorator'
import { UserDto } from 'resolvers/users/users.dto'
import {
  createUserService,
  deleteUserPermanentService,
  deleteUserService,
  getAllUsersService,
  restoreUserService,
  updateUserService,
} from 'resolvers/users/users.service'
import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import User from './users.model'
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
  async getCurrentUser(@CurrentContextUser() currentUser: User | null) {
    if (!currentUser) {
      throw new BadRequestError(USER_ERRORS.USER_CURRENT_USER_CONTEXT)
    }

    return formatDBResponse(currentUser)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Query(() => [UserDto])
  async getAllUsers() {
    const users = await getAllUsersService()

    return formatDBResponse(users)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Query(() => [UserDto])
  @ValidateArgs(GetUserInput)
  async getUser(
    @Arg('options') _options: GetUserInput,
    @UserExist({ existingUserError: true }) existingUser: User
  ) {
    return formatDBResponse(existingUser)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => UserDto)
  @ValidateArgs(CreateUserInput)
  async createUser(
    @Arg('options') options: CreateUserInput,
    @UserExist({ existingUserError: false }) existingUser: User
  ) {
    const { email, password, name, role } = options

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ERRORS.USER_ALREADY_EXISTS)
    }

    const user = await createUserService(email, password, name, role)

    return formatDBResponse(user)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => UserDto)
  @ValidateArgs(UpdateUserInput)
  async updateUser(
    @Arg('options') options: UpdateUserInput,
    @UserExist({ existingUserError: true }) _existingUser: User
  ) {
    const { id, email, name, role } = options

    const user = await updateUserService(id, {
      email,
      name,
      role,
    })

    return formatDBResponse(user)
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => Boolean)
  @ValidateArgs(DeleteUserInput)
  async deleteUser(
    @Arg('options') options: DeleteUserInput,
    @UserExist({ existingUserError: true }) _existingUser: User
  ) {
    const { id } = options

    await deleteUserService(id)

    return true
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => Boolean)
  @ValidateArgs(DeleteUserInput)
  async deleteUserPermanently(
    @Arg('options') options: DeleteUserInput,
    @UserExist({ existingUserError: true }) _existingUser: User
  ) {
    const { id } = options

    await deleteUserPermanentService(id)

    return true
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => Boolean)
  @ValidateArgs(RestoreUserInput)
  async restoreUser(
    @Arg('options') options: RestoreUserInput,
    @UserExist({ existingUserError: true }) _existingUser: User
  ) {
    const { id } = options

    await restoreUserService(id)

    return true
  }
}
