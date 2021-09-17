import ForeBetBTTSScraper from './forebet/btts'
import ForeBetOU25Scraper from './forebet/ou25'

const getTipsForDayScraper = async () => {
  try {
    return [...(await ForeBetBTTSScraper()), ...(await ForeBetOU25Scraper())]
  } catch (error) {
    console.error('error', error)
    return
  }
}

export default getTipsForDayScraper
