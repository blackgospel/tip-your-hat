import { USER_DB } from 'constants/db/db.key'
import dayjs from 'dayjs'
import { toHash } from 'helpers/password'
import shortid from 'shortid'
import { USER_ROLES } from 'constants/enums'
import User from 'resolvers/users/users.model'
import { AuthRepository } from './auth.repository'

export const getUserByEmail = async (email: string) => {
  const data = await AuthRepository.query()
    .wherePartitionKey(email)
    .execSingle()

  return data
}

export const registerUser = async (
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

  await AuthRepository.put(user).exec()

  return true
}

export const updateTokenVersion = async (
  id: string,
  email: string,
  tokenVersion: number
) => {
  const data = await AuthRepository.update(email, id)
    .updateAttribute('tokenVersion')
    .set(tokenVersion)
    .returnValues('UPDATED_NEW')
    .exec()

  return data
}
