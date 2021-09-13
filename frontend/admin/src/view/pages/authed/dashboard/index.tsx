import {
  DashboardContainer,
  MainCards,
  MainCardsContainer,
  MainOverviewCard,
  MainOverviewCardInfo,
  MainOverviewCardTitle,
  MainOverviewContainer,
} from './index.styles'

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <MainOverviewContainer>
        <MainOverviewCard>
          <MainOverviewCardTitle>Overview</MainOverviewCardTitle>
          <MainOverviewCardInfo>Card</MainOverviewCardInfo>
        </MainOverviewCard>
        <MainOverviewCard>
          <MainOverviewCardTitle>Overview</MainOverviewCardTitle>
          <MainOverviewCardInfo>Card</MainOverviewCardInfo>
        </MainOverviewCard>
        <MainOverviewCard>
          <MainOverviewCardTitle>Overview</MainOverviewCardTitle>
          <MainOverviewCardInfo>Card</MainOverviewCardInfo>
        </MainOverviewCard>
        <MainOverviewCard>
          <MainOverviewCardTitle>Overview</MainOverviewCardTitle>
          <MainOverviewCardInfo>Card</MainOverviewCardInfo>
        </MainOverviewCard>
      </MainOverviewContainer>
      <MainCardsContainer>
        <MainCards>Card</MainCards>
        <MainCards>Card</MainCards>
        <MainCards>Card</MainCards>
      </MainCardsContainer>
    </DashboardContainer>
  )
}

export default Dashboard
