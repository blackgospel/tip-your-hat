import type { ApolloContext } from 'context/apollo.context'
import cookie from 'cookie'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { verify } from 'jsonwebtoken'
import BadRequestError from 'src/errors/bad-request'
import { AuthChecker } from 'type-graphql'
import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'

export const isAuth: MiddlewareFn<ApolloContext> = ({ context }, next) => {
  const authorization = context.event.headers.authorization

  if (!authorization) {
    throw new BadRequestError(GENERAL_ERRORS.UNAUTHORIZED_ACCESS)
  }

  try {
    const payload = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
    context.payload = payload as any
  } catch {
    throw new BadRequestError(GENERAL_ERRORS.UNAUTHORIZED_ACCESS)
  }

  return next()
}

export const cookieParser: MiddlewareFn<ApolloContext> = (
  { context },
  next
) => {
  const requestCookie = context.event.headers.Cookie

  if (!requestCookie) {
    return next()
  }

  try {
    const token = cookie.parse(requestCookie)
    context.cookies = token
  } catch {
    return next()
  }

  return next()
}

export const authorizationChecker: AuthChecker<ApolloContext> = (
  { context },
  roles
) => {
  const authorization = context.event.headers.authorization

  if (!authorization || roles.length === 0) {
    throw new BadRequestError(GENERAL_ERRORS.UNAUTHORIZED_ACCESS)
  }

  try {
    const payload: any = verify(authorization, process.env.JWT_ACCESS_TOKEN!)

    return roles.includes(payload.role)
  } catch (err) {
    throw new BadRequestError(GENERAL_ERRORS.UNAUTHORIZED_ACCESS)
  }
}
