import { MapperForType, StringAttribute } from '@shiftcoders/dynamo-easy'
import { USER_DB } from 'constants/db/db.key'
import { addDBKey, removeDBKey } from 'helpers/db-helpers'

export const userPKMapper: MapperForType<string, StringAttribute> = {
  fromDb: (attributeValue) => removeDBKey(attributeValue.S),
  toDb: (propertyValue) => ({ S: addDBKey(USER_DB.PK, propertyValue) }),
}

export const userSKMapper: MapperForType<string, StringAttribute> = {
  fromDb: (attributeValue) => removeDBKey(attributeValue.S),
  toDb: (propertyValue) => ({ S: addDBKey(USER_DB.SK, propertyValue) }),
}
