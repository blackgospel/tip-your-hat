import { USER_ROLES } from 'constants/enums'
import {
  AUTH_INCORRECT_FIELDS,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXIST,
  USER_INCORRECT_FIELDS,
} from 'constants/error-messages'
import type { ApolloContext } from 'context/auth-context'
import BadRequestError from 'errors/bad-request'
import { formatDBResponse } from 'helpers/db-helpers'
import { createJWTCookie, destroyJWTCookie, signAccessToken } from 'helpers/jwt'
import { compare } from 'helpers/password'
import { verify } from 'jsonwebtoken'
import isEmpty from 'lodash.isempty'
import { isAuth } from 'middleware/auth'
import {
  createUserService,
  getUserByEmailService,
  getUserService,
} from 'resolvers/users/users.service'
import {
  Arg,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { updateTokenVersionService } from './auth.service'
import {
  LoginUserInput,
  LoginUserOutput,
  RefreshTokenOutput,
  RegisterUserInput,
  RevokeRefreshTokenInput,
} from './auth.types'

@Resolver()
export class AuthResolver {
  @Query(() => String)
  hello() {
    return 'hi'
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.BASIC])
  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: ApolloContext) {
    return `your user id is: ${payload!.id}`
  }

  @Mutation(() => Boolean)
  async register(@Arg('options') options: RegisterUserInput) {
    const { email, password, name } = options

    if (!email || !password || !name) {
      throw new BadRequestError(AUTH_INCORRECT_FIELDS)
    }

    const existingUser = await getUserByEmailService(email)

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ALREADY_EXISTS)
    }

    await createUserService(email, password, name!, USER_ROLES.BASIC)

    return true
  }

  @Mutation(() => LoginUserOutput)
  async login(
    @Arg('options') options: LoginUserInput,
    @Ctx() context: ApolloContext
  ) {
    const { email, password } = options

    if (!email || !password) {
      throw new BadRequestError(AUTH_INCORRECT_FIELDS)
    }

    const user = await getUserByEmailService(email!)

    if (!user || isEmpty(user)) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    if (!(await compare(user.password, password!))) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    createJWTCookie(context, user)

    return {
      accessToken: signAccessToken(user),
      user: formatDBResponse(user),
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() context: ApolloContext) {
    destroyJWTCookie(context)

    return true
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.BASIC])
  @Mutation(() => RefreshTokenOutput)
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

    const user = await getUserService(payload.id)

    if (!user) {
      return { success: false, accessToken: '' }
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return { success: false, accessToken: '' }
    }

    createJWTCookie(context, user)

    return { success: true, accessToken: signAccessToken(user) }
  }

  @Authorized([USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN])
  @Mutation(() => Boolean)
  async revokeUserRefreshToken(
    @Arg('options') options: RevokeRefreshTokenInput
  ) {
    const { id } = options

    if (!id) {
      throw new BadRequestError(USER_INCORRECT_FIELDS)
    }

    const user = await getUserService(id)

    if (!user) {
      throw new BadRequestError(USER_DOES_NOT_EXIST)
    }

    updateTokenVersionService(user.pk, user.tokenVersion! + 1)

    return true
  }
}
