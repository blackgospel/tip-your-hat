import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RouteContainer = styled.div``

export const UnauthedContainer = styled.div``

export const AuthedContainer = styled.div`
  display: flex;
`

export const AuthedNavbar = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthedNavbarItem = styled(Link)``

export const NavbarLogoutItem = styled.span``
