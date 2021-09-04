import { update2 } from '@shiftcoders/dynamo-easy'
import { DB_GSI } from 'constants/db/db.entities'
import User from 'resolvers/users/users.model'
import { AuthRepository } from './auth.repository'

export const getUserByEmailService = async (email: string) => {
  const data = await AuthRepository.query()
    .index(DB_GSI.USER_EMAIL)
    .wherePartitionKey(email)
    .execSingle()

  return data
}

export const updateTokenVersionService = async (
  id: string,
  tokenVersion: number
) => {
  const fields: Partial<User> = { tokenVersion }
  return await updateAuthFields(id, fields)
}

const updateAuthFields = async (id: string, fields: Partial<User>) => {
  return await AuthRepository.update(id, id)
    .operations(
      ...Object.keys(fields).map((item: string) => {
        const fieldAttribute = item as keyof User
        return update2(User, fieldAttribute).set(fields[fieldAttribute]!)
      })
    )
    .returnValues('ALL_NEW')
    .exec()
}
