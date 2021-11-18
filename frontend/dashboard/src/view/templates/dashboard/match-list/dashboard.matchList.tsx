import { MatchList } from 'constants/data'
import * as S from './index.styles'
import DashboardMatchListItem from './match-list-item/dashboard.matchListItem'

const DashboardMatchList = () => {
  return (
    <S.DashboardMatchListContainer>
      {MatchList.map((item, index) => {
        return (
          <S.MatchButton key={index}>
            <DashboardMatchListItem item={item} />
          </S.MatchButton>
        )
      })}
    </S.DashboardMatchListContainer>
  )
}

export default DashboardMatchList
