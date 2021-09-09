import { isEmpty } from 'class-validator'
import { ApolloContext } from 'context/apollo.context'
import BadRequestError from 'errors/bad-request'
import { USER_ERRORS } from 'errors/error-messages'
import {
  getUserByEmailService,
  getUserService,
} from 'resolvers/users/users.service'
import { createParamDecorator } from 'type-graphql'

interface UserExistOptions {
  checkDeleted?: boolean
  existingUserError?: boolean
}

const UserExist = (options?: UserExistOptions) => {
  return createParamDecorator<ApolloContext>(async ({ args }) => {
    const { id, email } = args.options

    const existingUser = id
      ? await getUserService(id)
      : await getUserByEmailService(email)

    if (
      options &&
      options.existingUserError &&
      (!existingUser || isEmpty(existingUser))
    ) {
      throw new BadRequestError(USER_ERRORS.USER_DOES_NOT_EXIST)
    }

    if (
      options &&
      options.checkDeleted &&
      existingUser &&
      existingUser.isDeleted
    ) {
      throw new BadRequestError(USER_ERRORS.USER_DELETED)
    }

    return existingUser
  })
}

export default UserExist
