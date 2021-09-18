import { update2 } from '@shiftcoders/dynamo-easy'
import PromisePool from '@supercharge/promise-pool'
import dayjs from 'dayjs'
import { removeEmptyValues } from 'helpers/generic'
import chunk from 'lodash.chunk'
import shortid from 'shortid'
import Tips, { MatchInfo, PredictionInfo } from './tips.model'
import { TipsRepository } from './tips.repository'

export const getTipService = async (id: string) => {
  return await TipsRepository.get(id, id).exec()
}

export const getAllTipsService = async () => {
  return await TipsRepository.scan()
    .whereAttribute('isDeleted')
    .equals(false)
    .execFetchAll()
}

export const batchCreateTips = async (
  tipData: {
    matchInfo: MatchInfo
    predictionInfo: PredictionInfo
    matchStart: number
    sport: string
  }[]
) => {
  const formattedTips = tipData.map(
    ({ matchInfo, predictionInfo, matchStart, sport }) => {
      const id = shortid()

      return {
        pk: id,
        sk: id,
        matchInfo,
        predictionInfo,
        matchStart,
        sport,
      }
    }
  )

  return await batchWriteTips(formattedTips)
}

export const updateTipService = (id: string, fields: Partial<Tips>) => {
  return updateTipFields(id, fields)
}

export const deleteTipService = (id: string) => {
  const fields: Partial<Tips> = { isDeleted: true }
  return updateTipFields(id, fields)
}

export const deleteTipPermanentService = async (id: string) => {
  return await TipsRepository.delete(id, id).exec()
}

export const restoreTipService = (id: string) => {
  const fields: Partial<Tips> = { isDeleted: false }
  return updateTipFields(id, fields)
}

const updateTipFields = async (id: string, fields: Partial<Tips>) => {
  const formattedFields: Partial<Tips> = {
    ...removeEmptyValues(fields),
    updatedAt: dayjs().valueOf(),
  }

  return await TipsRepository.update(id, id)
    .operations(
      ...Object.keys(formattedFields!).map((item: string) => {
        const fieldAttribute = item as keyof Tips
        return update2(Tips, fieldAttribute).set(
          formattedFields![fieldAttribute]!
        )
      })
    )
    .returnValues('ALL_NEW')
    .exec()
}

const batchWriteTips = async (items: any[]) => {
  const chunkFormattedTips = chunk(items, 25)

  const { results, errors } = await PromisePool.withConcurrency(3)
    .for(chunkFormattedTips)
    .process(async (item) => {
      return await TipsRepository.batchWrite().put(item).exec()
    })

  console.error(errors)

  return results
}
