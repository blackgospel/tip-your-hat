import {
  GSIPartitionKey,
  GSISortKey,
  Model,
  PartitionKey,
  Property,
  SortKey,
} from '@shiftcoders/dynamo-easy'
import { dbTipsTableName } from 'constants/db/db'
import { DB_GSI } from 'constants/db/db.entities'
import { TIPS_DB } from 'constants/db/db.key'
import dayjs from 'dayjs'
import { Field, ObjectType } from 'type-graphql'
import { tipsPKMapper, tipsSKMapper } from './tips.mapper'

@ObjectType()
export class MatchInfo {
  @Field()
  team1: string

  @Field()
  team2?: string
}

@ObjectType()
export class PredictionInfo {
  @Field()
  predictionName: string

  @Field()
  predictionValue: string
}

@Model({ tableName: dbTipsTableName })
@ObjectType()
class Tips {
  @Property({ mapper: tipsPKMapper })
  @PartitionKey()
  @GSISortKey(DB_GSI.ENTITY)
  @Field()
  pk: string

  @Property({ mapper: tipsSKMapper })
  @SortKey()
  @Field()
  sk: string

  @Property({ defaultValueProvider: () => TIPS_DB.ENTITY })
  @GSIPartitionKey(DB_GSI.ENTITY)
  @Field({ nullable: true })
  entity?: string

  @Field()
  matchInfo: MatchInfo

  @Field()
  predictionInfo: PredictionInfo

  @Field()
  sport: string

  @Field()
  matchStart: number

  @Property({ defaultValueProvider: () => dayjs().valueOf() })
  @Field({ nullable: true })
  createdAt?: number

  @Property({ defaultValueProvider: () => dayjs().valueOf() })
  @Field({ nullable: true })
  updatedAt?: number

  @Property({ defaultValueProvider: () => false })
  @Field({ nullable: true })
  isActive?: boolean

  @Property({ defaultValueProvider: () => false })
  @Field({ nullable: true })
  isDeleted?: boolean
}

export default Tips
