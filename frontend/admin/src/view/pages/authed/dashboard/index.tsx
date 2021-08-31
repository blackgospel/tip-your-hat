import { useUsersQuery } from 'generated/graphql'
import React from 'react'
import { DashboardContainer } from './index.styles'

const Dashboard: React.FC = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' })

  if (!data) {
    return <DashboardContainer>...loading</DashboardContainer>
  }

  return <DashboardContainer>Dashboard</DashboardContainer>
}

export default Dashboard
