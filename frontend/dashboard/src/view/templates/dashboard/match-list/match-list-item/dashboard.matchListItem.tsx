import * as Logos from 'react-nba-logos'
import * as S from './index.styles'

interface ListItemProps {
  homeName: string
  homeForm: string[]
  homeSlug: string
  awayName: string
  awayForm: string[]
  awaySlug: string
  matchStart: string
}

interface MatchListItemProps {
  item: ListItemProps
}

const DashboardMatchListItem: React.FC<MatchListItemProps> = ({ item }) => {
  const { homeSlug, homeForm, awaySlug, awayForm, matchStart } = item

  // const { [homeSlug], [awaySlug] } = Logos

  return (
    <S.Container>
      <S.TimeBox>
        <S.Time align="left">{matchStart}</S.Time>
      </S.TimeBox>
      <S.MatchDetailsBox>
        <S.TeamDetailsBox>
          <Logos.BOS size={18} />
          <S.TeamName>{homeSlug}</S.TeamName>
        </S.TeamDetailsBox>
        <S.FormBox>
          {homeForm.map((item: string) => {
            return (
              <S.TeamFormBox key={item}>
                <S.TeamForm>{item}</S.TeamForm>
              </S.TeamFormBox>
            )
          })}
        </S.FormBox>
      </S.MatchDetailsBox>
      <S.MatchDetailsBox>
        <S.TeamDetailsBox>
          <Logos.BOS size={18} />
          <S.TeamName>{awaySlug}</S.TeamName>
        </S.TeamDetailsBox>
        <S.FormBox>
          {awayForm.map((item: string) => {
            return (
              <S.TeamFormBox key={item}>
                <S.TeamForm>{item}</S.TeamForm>
              </S.TeamFormBox>
            )
          })}
        </S.FormBox>
      </S.MatchDetailsBox>
    </S.Container>
  )
}

export default DashboardMatchListItem
