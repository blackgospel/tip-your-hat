import { USER_ROLES } from 'constants/enums'
import type { ApolloContext } from 'context/apollo.context'
import BadRequestError from 'errors/bad-request'
import { USER_ERRORS } from 'errors/error-messages'
import { formatDBResponse } from 'helpers/db-helpers'
import { createJWTCookie, destroyJWTCookie, signAccessToken } from 'helpers/jwt'
import { compare } from 'helpers/password'
import { verify } from 'jsonwebtoken'
import isEmpty from 'lodash.isempty'
import { isAuth } from 'middleware/auth-middleware'
import CurrentContextUser from 'middleware/current-context-user-decorator'
import UserExist from 'middleware/user-exist-decorator'
import ValidateArgs from 'middleware/validate-input-decorator'
import User from 'resolvers/users/users.model'
import {
  createUserService,
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

  @Authorized()
  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@CurrentContextUser() currentUser: User) {
    return `your user email is: ${currentUser.email}`
  }

  @Mutation(() => Boolean)
  @ValidateArgs(RegisterUserInput)
  async register(
    @Arg('options') options: RegisterUserInput,
    @UserExist({ existingUserError: false }) existingUser: User
  ) {
    const { email, password, name } = options

    if (!isEmpty(existingUser)) {
      throw new BadRequestError(USER_ERRORS.USER_ALREADY_EXISTS)
    }

    await createUserService(email, password, name, USER_ROLES.BASIC)

    return true
  }

  @Mutation(() => LoginUserOutput)
  @ValidateArgs(LoginUserInput)
  async login(
    @Arg('options') options: LoginUserInput,
    @Ctx() context: ApolloContext,
    @UserExist({ checkDeleted: true, existingUserError: true })
    existingUser: User
  ) {
    const { password } = options

    if (!(await compare(existingUser.password, password!))) {
      throw new BadRequestError(USER_ERRORS.USER_DOES_NOT_EXIST)
    }

    createJWTCookie(context, existingUser)

    return {
      accessToken: signAccessToken(existingUser),
      user: formatDBResponse(existingUser),
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() context: ApolloContext) {
    destroyJWTCookie(context)

    return true
  }

  @Authorized()
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
  @ValidateArgs(RevokeRefreshTokenInput)
  async revokeUserRefreshToken(
    @Arg('options') options: RevokeRefreshTokenInput,
    @UserExist({ checkDeleted: true, existingUserError: true })
    existingUser: User
  ) {
    const { id } = options

    updateTokenVersionService(id, existingUser.tokenVersion! + 1)

    return true
  }
}
