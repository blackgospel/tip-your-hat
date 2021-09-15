import axios from 'axios'
import cheerio from 'cheerio'

export const getWinDrawWinData = async () => {
  try {
    const siteUrl = 'https://www.windrawwin.com/predictions/today'

    const { data } = await axios({
      method: 'GET',
      url: siteUrl,
    })

    const $ = cheerio.load(data)

    const elementSelector = 'div.wdwtablest > div.wttr'

    $(elementSelector).each((index, element) => {
      if (index < 2) {
        // console.log('element', $(element).text()
      }
    })
  } catch (error) {
    console.error('error', error)
  }
}
