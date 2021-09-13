import React from 'react'
import { DashboardTagProps } from '../../index.types'
import { DashboardTagContainer } from './index.styles'

const DashboardTag: React.FC<DashboardTagProps> = ({
  children,
  color,
  handleClick,
}) => {
  return (
    <DashboardTagContainer color={color} onClick={handleClick}>
      {children}
    </DashboardTagContainer>
  )
}

export default DashboardTag
