import { DynamoStore } from '@shiftcoders/dynamo-easy'
import { documentClient } from 'constants/db/db'
import User from 'resolvers/users/users.model'

export const AuthRepository = new DynamoStore(User, documentClient)
