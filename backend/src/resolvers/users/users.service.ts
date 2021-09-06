import { update2 } from '@shiftcoders/dynamo-easy'
import { DB_GSI } from 'constants/db/db.entities'
import { USER_DB } from 'constants/db/db.key'
import { USER_ROLES } from 'constants/enums'
import dayjs from 'dayjs'
import { removeEmptyValues } from 'helpers/generic'
import { toHash } from 'helpers/password'
import shortid from 'shortid'
import User from './users.model'
import { UserRepository } from './users.repository'

export const getUserService = async (id: string) => {
  return await UserRepository.get(id, id).exec()
}

export const getUserByEmailService = async (email: string) => {
  return await UserRepository.query()
    .index(DB_GSI.USER_EMAIL)
    .wherePartitionKey(email)
    .execSingle()
}

export const getAllUsersService = async () => {
  return await UserRepository.query()
    .index(DB_GSI.ENTITY)
    .wherePartitionKey(USER_DB.ENTITY)
    .execFetchAll()
}

export const createUserService = async (
  email: string,
  password: string,
  name: string,
  role: USER_ROLES
) => {
  const id = shortid()

  const user = {
    pk: id,
    sk: id,
    email,
    name,
    password: await toHash(password),
    role,
  }

  await UserRepository.put(user).exec()

  return user
}

export const updateUserService = (id: string, fields: Partial<User>) => {
  return updateUserFields(id, fields)
}

export const deleteUserService = (id: string) => {
  const fields: Partial<User> = { isDeleted: true }
  return updateUserFields(id, fields)
}

export const deleteUserPermanentService = async (id: string) => {
  return await UserRepository.delete(id, id).exec()
}

export const restoreUserService = (id: string) => {
  const fields: Partial<User> = { isDeleted: false }
  return updateUserFields(id, fields)
}

const updateUserFields = async (id: string, fields: Partial<User>) => {
  const formattedFields: Partial<User> = {
    ...removeEmptyValues(fields),
    updatedAt: dayjs().valueOf(),
  }

  return await UserRepository.update(id, id)
    .operations(
      ...Object.keys(formattedFields!).map((item: string) => {
        const fieldAttribute = item as keyof User
        return update2(User, fieldAttribute).set(
          formattedFields![fieldAttribute]!
        )
      })
    )
    .returnValues('ALL_NEW')
    .exec()
}
