import axios from 'axios'
import cheerio from 'cheerio'
import dayjs from 'dayjs'
import { MatchInfo, PredictionInfo } from 'resolvers/tips/tips.model'
import { FOREBET_URLS } from '../index.sites'

const ForeBetBTTSScraper = async () => {
  const siteUrl = FOREBET_URLS.BTTS

  const { data } = await axios({
    method: 'GET',
    url: siteUrl,
  })

  const $ = cheerio.load(data)

  const tableRows = $('div.schema > div.rcnt')

  const rawData: {
    matchInfo: MatchInfo
    predictionInfo: PredictionInfo
  }[] = []

  tableRows.each(function (_idx, el) {
    const prediction = {
      matchInfo: {
        team1: '',
        team2: '',
        matchStart: 0,
      },
      predictionInfo: {
        predictionName: '',
        predictionValue: '',
      },
    }

    const bttsYes = $(el).find('div.fprc > span')[0]
    const bttsNo = $(el).find('div.fprc > span')[1]

    if (+$(bttsYes).text() >= 70) {
      prediction.predictionInfo.predictionName = 'BTTS|Yes'
      prediction.predictionInfo.predictionValue = $(bttsYes).text()
    } else if (+$(bttsNo).text() >= 70) {
      prediction.predictionInfo.predictionName = 'BTTS|No'
      prediction.predictionInfo.predictionValue = $(bttsNo).text()
    } else {
      return
    }

    const team1 = $(el).find('a.tnmscn > span.homeTeam').text()
    const team2 = $(el).find('a.tnmscn > span.awayTeam').text()
    const [_, matchTime] = $(el).find('a.tnmscn > time').text().split(' ')

    const [hour, minute] = matchTime.split(':')

    const time = dayjs()
      .set('hour', +hour)
      .set('minute', +minute)
      .set('second', 0)

    prediction.matchInfo.team1 = team1
    prediction.matchInfo.team2 = team2
    prediction.matchInfo.matchStart = time.valueOf()

    rawData.push(prediction)
  })
  return rawData
}

export default ForeBetBTTSScraper
