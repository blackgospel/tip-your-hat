import Typography from 'common/typography'
import React from 'react'
import { PageContainer } from 'view/common/global/page-container'
import { HomeContainer } from './index.styles'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <HomeContainer>
        <Typography tag="h1">Tip Your Hat Homepage</Typography>
      </HomeContainer>
    </PageContainer>
  )
}

export default Home
