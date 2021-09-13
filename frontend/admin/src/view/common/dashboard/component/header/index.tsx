import React from 'react'
import { BiBellPlus } from 'react-icons/bi'
import { DashboardHeaderProps } from '../../index.types'
import {
  DashboardHeaderContainer,
  DashboardHeaderNotification,
} from './index.styles'

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderNotification>
        <BiBellPlus />
      </DashboardHeaderNotification>
    </DashboardHeaderContainer>
  )
}

export default DashboardHeader
