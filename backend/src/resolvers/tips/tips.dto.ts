import { IsBoolean, IsEmail, IsString } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { Field, ObjectType } from 'type-graphql'
import Tips, { MatchInfo, PredictionInfo } from './tips.model'

@ObjectType()
export class TipsDto implements Partial<Tips> {
  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string

  @Field()
  @IsEmail(undefined, { message: GENERAL_ERRORS.VALIDATION_ERROR })
  matchInfo: MatchInfo

  @Field()
  @IsString({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  predictionInfo: PredictionInfo

  @Field()
  @IsBoolean({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  isActive: boolean

  @Field()
  @IsBoolean({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  isDeleted: boolean
}
