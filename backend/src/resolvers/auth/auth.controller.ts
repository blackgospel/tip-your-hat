import {
  AUTH_INCORRECT_FIELDS,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXIST,
} from 'constants/error-messages'
import { createJWTCookie, destroyJWTCookie, signAccessToken } from 'helpers/jwt'
import { compare } from 'helpers/password'
import { verify } from 'jsonwebtoken'
import isEmpty from 'lodash.isempty'
import BadRequestError from 'errors/bad-request'
import type { ApolloContext } from 'context/auth-context'
import {
  Query,
  Ctx,
  Arg,
  Mutation,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import {
  getUserByEmail,
  registerUser,
  updateTokenVersion,
} from './auth.service'
import {
  RegisterType,
  LoginResponse,
  LoginType,
  RefreshTokenResponse,
} from './auth.types'
import { isAuth } from 'middleware/auth'
import { formatDBResponse } from 'helpers/db-helpers'
import { USER_ROLES } from 'constants/enums'

@Resolver()
export class AuthResolver {
  @Query(() => String)
  hello() {
    return 'hi'
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: ApolloContext) {
    return `your user id is: ${payload!.id}`
  }

  @Mutation(() => RefreshTokenResponse)
  async refreshToken(@Ctx() context: ApolloContext) {
    const token = context.cookies?.jid

    if (!token) {
      return { success: false, accessToken: '' }
    }

    let payload: any = null

    try {
      payload = verify(token, process.env.JWT_REFRESH_TOKEN!)
    } catch (err) {
      return { success: false, accessToken: '' }
    }

    const user = await getUserByEmail(payload.email)

    if (!user) {
      return { success: false, accessToken: '' }
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return { success: false, accessToken: '' }
    }

    createJWTCookie(context, user)

    return { success: true, accessToken: signAccessToken(user) }
  }

  @Mutation(() => Boolean)
  async revokeUserRefreshToken(@Arg('email', () => String) email: string) {
    const user = await getUserByEmail(email)

    if (!user) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    updateTokenVersion(user.pk, user.sk, user.tokenVersion + 1)

    return true
  }

  @Mutation(() => Boolean)
  async register(@Arg('options') options: RegisterType) {
    const { email, password, name } = options

    if (!email || !password || !name) {
      throw new BadRequestError(AUTH_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmail(email)

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ALREADY_EXISTS)
    }

    await registerUser(email, password, name!, USER_ROLES.BASIC)

    return true
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('options', { validate: true }) options: LoginType,
    @Ctx() context: ApolloContext
  ) {
    const { email, password } = options

    if (!email || !password) {
      throw new BadRequestError(AUTH_INCORRECT_FIELDS)
    }

    const user = await getUserByEmail(email!)

    if (!user || isEmpty(user)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    if (!(await compare(user.password, password!))) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    createJWTCookie(context, user)

    return {
      accessToken: signAccessToken(user),
      user: formatDBResponse(user, 'id', 'email'),
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() context: ApolloContext) {
    destroyJWTCookie(context)

    return true
  }
}
