import {
  GSIPartitionKey,
  GSISortKey,
  Model,
  PartitionKey,
  Property,
  SortKey,
} from '@shiftcoders/dynamo-easy'
import { dbTableName } from 'constants/db/db'
import { DB_GSI } from 'constants/db/db.entities'
import { Field, ObjectType } from 'type-graphql'
import { userPKMapper, userSKMapper } from './users.mapper'

@Model({ tableName: dbTableName })
@ObjectType()
class User {
  @Property({ mapper: userPKMapper })
  @PartitionKey()
  @GSISortKey(DB_GSI.ENTITY)
  @Field()
  pk: string

  @Property({ mapper: userSKMapper })
  @SortKey()
  @Field()
  sk: string

  @GSIPartitionKey(DB_GSI.ENTITY)
  @Field()
  entity: string

  password: string

  @Field()
  name: string

  @Field()
  updatedAt: number

  @Field()
  role: number

  tokenVersion: number
}

export default User
