import axios from 'axios'
import cheerio from 'cheerio'
import dayjs from 'dayjs'
import { MatchInfo, PredictionInfo } from 'resolvers/tips/tips.model'
import { FOREBET_URLS, SPORTS } from '../index.sites'

const ForeBetOU25Scraper = async () => {
  const siteUrl = FOREBET_URLS.OU25

  const { data } = await axios({
    method: 'GET',
    url: siteUrl,
  })

  const $ = cheerio.load(data)

  const tableRows = $('div.schema > div.rcnt')

  const rawData: {
    matchInfo: MatchInfo
    predictionInfo: PredictionInfo
    matchStart: number
    sport: string
  }[] = []

  tableRows.each(function (_idx, el) {
    const prediction = {
      matchInfo: {
        team1: '',
        team2: '',
      },
      predictionInfo: {
        predictionName: '',
        predictionValue: '',
      },
      matchStart: 0,
      sport: SPORTS.FOOTBALL,
    }

    const over25 = $(el).find('div.fprc > span')[0]
    const under25 = $(el).find('div.fprc > span')[1]

    if (+$(over25).text() >= 70) {
      prediction.predictionInfo.predictionName = 'OU25|Over'
      prediction.predictionInfo.predictionValue = $(over25).text()
    } else if (+$(under25).text() >= 70) {
      prediction.predictionInfo.predictionName = 'OU25|Under'
      prediction.predictionInfo.predictionValue = $(under25).text()
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
    prediction.matchStart = time.valueOf()

    rawData.push(prediction)
  })
  return rawData
}

export default ForeBetOU25Scraper
