import Typography from 'common/global/typography'
import media, { hover } from 'helpers/theme/media'
import { colors } from 'helpers/theme/theme'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'

interface MenuLinkProps {
  active?: boolean
}

export const DashboardSidebarContainer = styled.aside`
  grid-area: sidebar;
  display: none;
  background-color: ${({ theme }) => theme.colors.sidebar.background.primary};
  padding: ${({ theme }) => theme.sizes.padding}px 0;
  border-right: ${({ theme }) => theme.colors.sidebar.border};

  ${media.xs`
    display: flex;
    flex-direction: column;
  `}
`

export const DashboardSidebarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.sizes.padding}px;
`

export const DashboardSidebarLogoText = styled(Typography)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.coreColors.white};
  margin-top: ${({ theme }) => theme.sizes.small}px;
  margin-left: ${({ theme }) => theme.sizes.small}px;
  text-transform: uppercase;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  ${({ theme }) => theme.fonts.h3};
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
  color: ${({ theme }) => theme.coreColors.white};
  margin-top: ${({ theme }) => theme.sizes.small / 2}px;
`

export const DashboardSidebarUserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.sizes.padding}px;
`

export const DashboardSidebarInfo = styled.div``

export const DashboardSidebarInfoName = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.fonts.h3};
`

export const DashboardSidebarInfoRole = styled(Typography)`
  color: ${({ theme }) => theme.colors.sidebar.text.muted};
  ${({ theme }) => theme.fonts.h4};
`

export const DashboardSidebarList = styled.ul`
  padding: 0;
  flex: 1;
`

export const DashboardSidebarListItem = styled.li<MenuLinkProps>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: transparent;
  }

  ${({ active }) =>
    active &&
    css`
      &:before {
        background-color: ${({ theme }) => theme.colors.primary};
      }

      p {
        color: ${colors.menu.text.hover} !important;
      }

      svg {
        color: ${colors.menu.text.hover} !important;
      }
    `}
`

export const DashboardSidebarListItemLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.base}px
    ${({ theme }) => theme.sizes.padding}px;

  svg {
    color: ${({ theme }) => theme.colors.menu.text.icon};
    transition: ${({ theme }) => theme.transitions.primary};
  }

  ${hover`
    p {
      color: ${colors.menu.text.hover};
    }

    svg {
      color: ${colors.menu.text.hover};
    }
  `}
`

export const DashboardSidebarListItemText = styled(Typography)`
  color: ${({ theme }) => theme.colors.menu.text.primary};
  margin-top: ${({ theme }) => theme.sizes.small / 2}px;
  margin-left: ${({ theme }) => theme.sizes.base}px;
  transition: ${({ theme }) => theme.transitions.primary};
  ${({ theme }) => theme.fonts.h3};
`

export const DashboardSidebarBottomNav = styled.div``

export const DashboardSidebarSignOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.sizes.padding}px;

  svg {
    color: ${({ theme }) => theme.colors.menu.text.icon};
    transition: ${({ theme }) => theme.transitions.primary};
  }

  ${hover`
    p {
      color: ${colors.primary};
    }

    svg {
      color: ${colors.primary};
    }
  `}
`

export const DashboardSidebarSignOutText = styled(Typography)`
  color: ${({ theme }) => theme.colors.menu.text.primary};
  margin-top: ${({ theme }) => theme.sizes.small / 2}px;
  margin-left: ${({ theme }) => theme.sizes.base}px;
  transition: ${({ theme }) => theme.transitions.primary};
  ${({ theme }) => theme.fonts.h3};
`
