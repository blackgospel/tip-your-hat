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
import { USER_DB } from 'constants/db/db.key'
import dayjs from 'dayjs'
import { Field, ObjectType } from 'type-graphql'
import { userPKMapper, userSKMapper } from './users.mapper'

@Model({ tableName: dbTableName })
@ObjectType()
class User {
  @Property({ mapper: userPKMapper })
  @PartitionKey()
  @GSISortKey(DB_GSI.ENTITY)
  @GSISortKey(DB_GSI.USER_EMAIL)
  @Field()
  pk: string

  @Property({ mapper: userSKMapper })
  @SortKey()
  @Field()
  sk: string

  @Property({ defaultValueProvider: () => USER_DB.ENTITY })
  @GSIPartitionKey(DB_GSI.ENTITY)
  @Field({ nullable: true })
  entity?: string

  @GSIPartitionKey(DB_GSI.USER_EMAIL)
  @Field()
  email: string

  password: string

  @Field()
  name: string

  @Property({ defaultValueProvider: () => dayjs().valueOf() })
  @Field({ nullable: true })
  createdAt?: number

  @Property({ defaultValueProvider: () => dayjs().valueOf() })
  @Field({ nullable: true })
  updatedAt?: number

  @Field()
  role: number

  @Property({ defaultValueProvider: () => 0 })
  @Field({ nullable: true })
  tokenVersion?: number

  @Property({ defaultValueProvider: () => 0 })
  @Field({ nullable: true })
  credits?: number

  @Property({ defaultValueProvider: () => false })
  @Field({ nullable: true })
  isDeleted?: boolean
}

export default User
