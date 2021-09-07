import { ApolloContext } from 'context/apollo.context'
import BadRequestError from 'errors/bad-request'
import { USER_ERRORS } from 'errors/error-messages'
import { verify } from 'jsonwebtoken'
import { getUserService } from 'resolvers/users/users.service'
import { createParamDecorator } from 'type-graphql'

interface CurrentContextUserOptions {
  softError?: boolean
}

const CurrentContextUser = (options?: CurrentContextUserOptions) => {
  return createParamDecorator<ApolloContext>(async ({ context }) => {
    const authorization = context.event.headers.authorization

    if (!authorization) {
      executeError(options?.softError)
    }

    try {
      const payload: any = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
      const user = await getUserService(payload.id)

      return user
    } catch (err) {
      executeError(options?.softError)
    }
  })
}

const executeError = (softError?: boolean) => {
  if (softError) {
    return null
  } else {
    throw new BadRequestError(USER_ERRORS.USER_CURRENT_USER_CONTEXT)
  }
}

export default CurrentContextUser
