import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { VerticalSpacing } from 'common/global/spacing'
import Logo from 'common/logo'
import { AUTH_ROLES_REVERSE } from 'constants/auth'
import useLogout from 'helpers/hooks/useLogout'
import useRouter from 'helpers/hooks/useRouter'
import React from 'react'
import { AuthorisedNavbarRoutes } from 'routes/index.routes'
import useCurrentUserStore from 'zustands/stores/current-user'
import { DashboardSidebarProps } from '../../index.types'
import {
  DashboardSidebarAvatar,
  DashboardSidebarAvatarContainer,
  DashboardSidebarBottomNav,
  DashboardSidebarContainer,
  DashboardSidebarInfo,
  DashboardSidebarInfoName,
  DashboardSidebarInfoRole,
  DashboardSidebarList,
  DashboardSidebarListItem,
  DashboardSidebarListItemLink,
  DashboardSidebarListItemText,
  DashboardSidebarLogoContainer,
  DashboardSidebarLogoText,
  DashboardSidebarSignOut,
  DashboardSidebarSignOutText,
  DashboardSidebarUserInfo,
} from './index.styles'

const DashboardSidebar: React.FC<DashboardSidebarProps> = () => {
  const { pathname } = useRouter()
  const { currentUser } = useCurrentUserStore()
  const logout = useLogout()

  return (
    <DashboardSidebarContainer>
      <DashboardSidebarLogoContainer>
        <Logo />
        <DashboardSidebarLogoText>Tip Your Hat</DashboardSidebarLogoText>
      </DashboardSidebarLogoContainer>
      <VerticalSpacing />
      <DashboardSidebarList>
        {AuthorisedNavbarRoutes.map(({ name, path, NavbarIcon }) => {
          return (
            <DashboardSidebarListItem key={name} active={pathname === path}>
              <DashboardSidebarListItemLink to={path}>
                <NavbarIcon />
                <DashboardSidebarListItemText>
                  {name}
                </DashboardSidebarListItemText>
              </DashboardSidebarListItemLink>
            </DashboardSidebarListItem>
          )
        })}
      </DashboardSidebarList>
      <VerticalSpacing />
      <DashboardSidebarBottomNav>
        <DashboardSidebarUserInfo>
          <DashboardSidebarAvatarContainer>
            <DashboardSidebarAvatar>SA</DashboardSidebarAvatar>
          </DashboardSidebarAvatarContainer>
          <VerticalSpacing spacing={3} />
          <DashboardSidebarInfo>
            <DashboardSidebarInfoName>
              {currentUser?.name}
            </DashboardSidebarInfoName>
            <DashboardSidebarInfoRole>
              {
                AUTH_ROLES_REVERSE[
                  currentUser?.role as keyof typeof AUTH_ROLES_REVERSE
                ]
              }
            </DashboardSidebarInfoRole>
          </DashboardSidebarInfo>
        </DashboardSidebarUserInfo>
        <VerticalSpacing spacing={3} />
        <DashboardSidebarSignOut onClick={logout}>
          <PowerSettingsNewIcon />
          <DashboardSidebarSignOutText>Sign Out</DashboardSidebarSignOutText>
        </DashboardSidebarSignOut>
      </DashboardSidebarBottomNav>
    </DashboardSidebarContainer>
  )
}

export default DashboardSidebar
