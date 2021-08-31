import { DynamoStore } from '@shiftcoders/dynamo-easy'
import { documentClient } from 'constants/db/db'
import User from './users.model'

export const UserRepository = new DynamoStore(User, documentClient)
