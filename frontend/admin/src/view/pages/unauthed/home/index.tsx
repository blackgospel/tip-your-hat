import { useUsersQuery } from 'generated/graphql'
import React from 'react'
import { HomeContainer } from './index.styles'

const Home: React.FC = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' })

  if (!data) {
    return <HomeContainer>...loading</HomeContainer>
  }

  return <HomeContainer>Tip Your Hat Homepage</HomeContainer>
}

export default Home
