import { MapperForType, StringAttribute } from '@shiftcoders/dynamo-easy'
import { TIPS_DB } from 'constants/db/db.key'
import { addDBKey, removeDBKey } from 'helpers/db-helpers'

export const tipsPKMapper: MapperForType<string, StringAttribute> = {
  fromDb: (attributeValue) => removeDBKey(attributeValue.S),
  toDb: (propertyValue) => ({ S: addDBKey(TIPS_DB.PK, propertyValue) }),
}

export const tipsSKMapper: MapperForType<string, StringAttribute> = {
  fromDb: (attributeValue) => removeDBKey(attributeValue.S),
  toDb: (propertyValue) => ({ S: addDBKey(TIPS_DB.SK, propertyValue) }),
}
