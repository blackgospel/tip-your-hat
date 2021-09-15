import NotificationsIcon from '@material-ui/icons/Notifications'
import React from 'react'
import { DashboardHeaderProps } from '../../index.types'
import {
  DashboardHeaderContainer,
  DashboardHeaderNotification,
} from './index.styles'

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderNotification>
        <NotificationsIcon />
      </DashboardHeaderNotification>
    </DashboardHeaderContainer>
  )
}

export default DashboardHeader
