import React from 'react'
import { DashboardMainProps } from '../../index.types'
import {
  DashboardMainContainer,
  DashboardMainWrapper,
  MainCards,
  MainCardsContainer,
  MainOverviewCard,
  MainOverviewCardInfo,
  MainOverviewCardTitle,
  MainOverviewContainer,
} from './index.styles'

const DashboardMain: React.FC<DashboardMainProps> = () => {
  return (
    <DashboardMainContainer>
      <DashboardMainWrapper>
        <MainOverviewContainer>
          {/* {children} */}
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
      </DashboardMainWrapper>
    </DashboardMainContainer>
  )
}

export default DashboardMain
