import cookie from 'cookie'
import { UNAUTHORIZED_ACCESS } from 'constants/error-messages'
import { verify } from 'jsonwebtoken'
import BadRequestError from 'src/errors/bad-request'
import type { ApolloContext } from 'context/auth-context'
import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'

export const isAuth: MiddlewareFn<ApolloContext> = ({ context }, next) => {
  const authorization = context.event.headers.authorization

  if (!authorization) {
    throw new BadRequestError(UNAUTHORIZED_ACCESS)
  }

  try {
    const payload = verify(authorization, process.env.JWT_ACCESS_TOKEN!)
    context.payload = payload as any
  } catch {
    throw new BadRequestError(UNAUTHORIZED_ACCESS)
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
