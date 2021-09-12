import Typography from 'common/global/typography'
import media, { hover } from 'helpers/theme/media'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const DashboardSidebarContainer = styled.aside`
  grid-area: sidebar;
  display: none;
  background-color: ${({ theme }) => theme.colors.sidebar.background};
  padding: ${({ theme }) => theme.sizes.radius}px
    ${({ theme }) => theme.sizes.padding}px;

  ${media.xs`
    display: flex;
    flex-direction: column;
  `}
`

export const DashboardSidebarLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DashboardSidebarLogoText = styled(Typography)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.sizes.small}px;
  margin-left: ${({ theme }) => theme.sizes.small}px;
  text-transform: uppercase;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  ${({ theme }) => theme.fonts.h3};
`

export const DashboardSidebarUserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const DashboardSidebarAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const DashboardSidebarAvatar = styled(Typography)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.avatar}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.sizes.small / 2}px;
`

export const DashboardSidebarInfo = styled.div``

export const DashboardSidebarInfoName = styled(Typography)`
  ${({ theme }) => theme.fonts.h3};
`

export const DashboardSidebarInfoRole = styled(Typography)`
  color: ${({ theme }) => theme.colors.sidebar.text.muted};
  ${({ theme }) => theme.fonts.h4};
`

export const DashboardSidebarList = styled.ul`
  padding: 0;
`

export const DashboardSidebarListItem = styled.li``

export const DashboardSidebarListItemLink = styled(Link)`
  ${hover`
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  `}
`

export const DashboardSidebarBottomNav = styled.div``

export const DashboardSidebarDateInfo = styled(Typography)``
