import React from 'react'
import DashboardHeader from './component/header'
import DashboardMain from './component/main'
import DashboardSidebar from './component/sidebar'
import { DashboardContainer } from './index.styles'
import { DashboardCommonProps } from './index.types'

const Dashboard: React.FC<DashboardCommonProps> = ({ children }) => {
  return (
    <DashboardContainer>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardMain>{children}</DashboardMain>
    </DashboardContainer>
  )
}

export default Dashboard
