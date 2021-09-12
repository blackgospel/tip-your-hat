import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components/macro'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

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

export const Spinner = styled.div`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #3498db;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: ${spin} 2s linear infinite;
`
