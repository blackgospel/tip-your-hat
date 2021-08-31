import {
  Metadata,
  update,
  update2,
  UpdateExpression,
  UpdateExpressionDefinitionFunction,
} from '@shiftcoders/dynamo-easy'
import { DB_GSI } from 'constants/db/db.entities'
import { USER_DB } from 'constants/db/db.key'
import { USER_ROLES } from 'constants/enums'
import dayjs from 'dayjs'
import { toHash } from 'helpers/password'
import shortid from 'shortid'
import User from './users.model'
import { UserRepository } from './users.repository'

export const getAllUsersService = async () => {
  const data = await UserRepository.query()
    .index(DB_GSI.ENTITY)
    .wherePartitionKey(USER_DB.ENTITY)
    .execFetchAll()
    .then((res) => res)

  return data
}

export const createUserService = async (
  email: string,
  password: string,
  name: string,
  role: USER_ROLES
) => {
  const user = {
    pk: email,
    sk: shortid(),
    entity: USER_DB.ENTITY,
    name,
    password: await toHash(password),
    updatedAt: dayjs().unix(),
    role,
    tokenVersion: 0,
  }

  await UserRepository.put(user).exec()

  return user
}

export const updateUserService = async (
  id: string,
  email: string,
  fields: Partial<User>
) => {
  const user = await multipleUserUpdates(email, id, fields)

  return user
}

export const deleteUserService = async (email: string, id: string) => {
  await UserRepository.delete(email, id).exec()
}

const multipleUserUpdates = async (pk: string, sk: string, fields: any) => {
  return await UserRepository.update(pk, sk)
    .operations(
      ...Object.keys(fields).map((item: string) => {
        const fieldAttribute = item as keyof User
        return update2(User, fieldAttribute).set(fields[fieldAttribute]!)
      })
    )
    .returnValues('ALL_NEW')
    .exec()
    .then((res) => res)
}
