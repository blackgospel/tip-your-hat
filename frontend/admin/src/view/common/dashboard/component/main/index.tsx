import React from 'react'
import { DashboardMainProps } from '../../index.types'
import { DashboardMainContainer, DashboardMainWrapper } from './index.styles'

const DashboardMain: React.FC<DashboardMainProps> = ({ children }) => {
  return (
    <DashboardMainContainer>
      <DashboardMainWrapper>{children}</DashboardMainWrapper>
    </DashboardMainContainer>
  )
}

export default DashboardMain
