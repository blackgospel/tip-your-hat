import React from 'react'
import { DashboardHeaderProps } from '../../index.types'
import {
  DashboardHeaderAvatar,
  DashboardHeaderContainer,
  DashboardHeaderSearch,
} from './index.styles'

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderSearch>Search</DashboardHeaderSearch>
      <DashboardHeaderAvatar>Avatar</DashboardHeaderAvatar>
    </DashboardHeaderContainer>
  )
}

export default DashboardHeader
