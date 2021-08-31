import { useLogoutMutation } from 'generated/graphql'
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container } from 'view/common/global'
import { LogoutContainer } from './index.styles'

const Logout: React.FC<RouteComponentProps> = ({ history }) => {
  const [logout, { client }] = useLogoutMutation()

  useEffect(() => {
    logout()
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    client.resetStore()
    history.push('/')
  }, [])

  return (
    <LogoutContainer>
      <Container>Logging Out...</Container>
    </LogoutContainer>
  )
}

export default Logout
