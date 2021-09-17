import { IsNotEmpty } from 'class-validator'
import { GENERAL_ERRORS } from 'errors/error-messages'
import { Field, InputType } from 'type-graphql'
import { MatchInfo, PredictionInfo } from './tips.model'

@InputType()
export class DefaultTipsInput {
  @Field({ nullable: true })
  id?: string
}

@InputType()
export class GetTipsInput extends DefaultTipsInput {
  @Field()
  @IsNotEmpty({ message: GENERAL_ERRORS.VALIDATION_ERROR })
  id: string
}

@InputType()
export class CreateTipsInput extends DefaultTipsInput {
  @Field()
  matchInfo: MatchInfo

  @Field()
  predictionInfo: PredictionInfo
}
