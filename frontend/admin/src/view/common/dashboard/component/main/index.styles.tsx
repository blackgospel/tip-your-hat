import media from 'helpers/theme/media'
import styled from 'styled-components/macro'

export const DashboardMainContainer = styled.main`
  grid-area: main;
`

export const DashboardMainWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const MainOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
`

export const MainOverviewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
`

export const MainOverviewCardTitle = styled.div``

export const MainOverviewCardInfo = styled.div``

export const MainCardsContainer = styled.div`
  column-gap: 20px;
  margin: 20px;

  ${media.sm`
    column-count: 2;
  `}
`

export const MainCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #82bef6;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;

  &:first-child {
    height: 485px;
  }

  &:nth-child(2) {
    height: 200px;
  }

  &:nth-child(3) {
    height: 265px;
  }
`
