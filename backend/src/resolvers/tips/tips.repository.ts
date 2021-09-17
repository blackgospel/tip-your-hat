import { DynamoStore } from '@shiftcoders/dynamo-easy'
import { documentClient } from 'constants/db/db'
import Tips from './tips.model'

export const TipsRepository = new DynamoStore(Tips, documentClient)
