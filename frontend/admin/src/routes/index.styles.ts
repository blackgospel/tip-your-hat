import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const RouteContainer = styled.div`
  height: 100%;
`

export const AuthedContainer = styled.div`
  display: flex;
  height: 100%;
`

export const AuthedNavbar = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthedNavbarItem = styled(Link)``

export const NavbarLogoutItem = styled.span``

export const RoutesLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
