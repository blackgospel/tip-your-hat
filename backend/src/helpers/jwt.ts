import { sign } from 'jsonwebtoken'
import { ApolloContext } from 'context/auth-context'
import User from 'src/resolvers/users/users.model'

export const signAccessToken = (user: User) => {
  return sign({ id: user.pk }, process.env.JWT_ACCESS_TOKEN!, {
    expiresIn: '15m',
  })
}

export const signRefreshToken = (user: User) => {
  return sign(
    {
      id: user.pk,
      tokenVersion: user.tokenVersion,
    },
    process.env.JWT_REFRESH_TOKEN!,
    {
      expiresIn: '7d',
    }
  )
}

export const createJWTCookie = (context: ApolloContext, user: User) => {
  context.setCookies.push({
    name: process.env.JWT_COOKIE_TOKEN!,
    value: signRefreshToken(user),
    options: {
      httpOnly: true,
    },
  })
}

export const destroyJWTCookie = (context: ApolloContext) => {
  context.setCookies.push({
    name: process.env.JWT_COOKIE_TOKEN!,
    value: '',
    options: {
      httpOnly: true,
    },
  })
}
