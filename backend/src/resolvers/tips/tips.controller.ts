import BadRequestError from 'errors/bad-request'
import { formatDBResponse } from 'helpers/db-helpers'
import getTipsForDayScraper from 'helpers/scrapers'
import { Mutation, Query, Resolver } from 'type-graphql'
import { TipsDto } from './tips.dto'
import { batchCreateTips, getAllTipsService } from './tips.service'

@Resolver()
export class TipResolver {
  @Query(() => [TipsDto])
  async getAllTips() {
    const tips = await getAllTipsService()

    return formatDBResponse(tips)
  }

  // @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  // @Query(() => FullUserDto)
  // @ValidateArgs(GetUserInput)
  // async getUser(
  //   @Arg('options') _options: GetUserInput,
  //   @UserExist({ existingUserError: true }) existingUser: User
  // ) {
  //   return formatDBResponse(existingUser)
  // }

  @Mutation(() => Boolean)
  async getTipsForDay() {
    const rawData = await getTipsForDayScraper()

    if (!rawData) {
      throw new BadRequestError('No tips to save')
    }

    await batchCreateTips(rawData)

    return true
  }

  // @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  // @Mutation(() => UserDto)
  // @ValidateArgs(UpdateUserInput)
  // async updateUser(
  //   @Arg('options') options: UpdateUserInput,
  //   @UserExist({ existingUserError: true }) _existingUser: User
  // ) {
  //   const { id, email, name, role } = options

  //   const user = await updateUserService(id, {
  //     email,
  //     name,
  //     role,
  //   })

  //   return formatDBResponse(user)
  // }

  // @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  // @Mutation(() => Boolean)
  // @ValidateArgs(DeleteUserInput)
  // async deleteUser(
  //   @Arg('options') options: DeleteUserInput,
  //   @UserExist({ existingUserError: true }) _existingUser: User
  // ) {
  //   const { id } = options

  //   await deleteUserService(id)

  //   return true
  // }

  // @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  // @Mutation(() => Boolean)
  // @ValidateArgs(DeleteUserInput)
  // async deleteUserPermanently(
  //   @Arg('options') options: DeleteUserInput,
  //   @UserExist({ existingUserError: true }) _existingUser: User
  // ) {
  //   const { id } = options

  //   await deleteUserPermanentService(id)

  //   return true
  // }

  // @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  // @Mutation(() => Boolean)
  // @ValidateArgs(RestoreUserInput)
  // async restoreUser(
  //   @Arg('options') options: RestoreUserInput,
  //   @UserExist({ existingUserError: true }) _existingUser: User
  // ) {
  //   const { id } = options

  //   await restoreUserService(id)

  //   return true
  // }
}
