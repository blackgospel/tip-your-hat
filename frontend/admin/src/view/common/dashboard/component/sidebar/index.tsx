import { VerticalSpacing } from 'common/global/spacing'
import Logo from 'common/logo'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorisedNavbarRoutes } from 'routes/index.routes'
import { DashboardSidebarProps } from '../../index.types'
import {
  DashboardSidebarAvatar,
  DashboardSidebarAvatarContainer,
  DashboardSidebarContainer,
  DashboardSidebarInfo,
  DashboardSidebarInfoName,
  DashboardSidebarInfoRole,
  DashboardSidebarList,
  DashboardSidebarListItem,
  DashboardSidebarLogoContainer,
  DashboardSidebarLogoText,
  DashboardSidebarUserInfo,
} from './index.styles'

const DashboardSidebar: React.FC<DashboardSidebarProps> = () => {
  return (
    <DashboardSidebarContainer>
      <DashboardSidebarLogoContainer>
        <Logo />
        <DashboardSidebarLogoText>Tip Your Hat</DashboardSidebarLogoText>
      </DashboardSidebarLogoContainer>
      <VerticalSpacing spacing={3} />
      <DashboardSidebarUserInfo>
        <DashboardSidebarAvatarContainer>
          <DashboardSidebarAvatar>SA</DashboardSidebarAvatar>
        </DashboardSidebarAvatarContainer>
        <VerticalSpacing spacing={3} />
        <DashboardSidebarInfo>
          <DashboardSidebarInfoName>Seun Adesina</DashboardSidebarInfoName>
          <DashboardSidebarInfoRole>Super Admin</DashboardSidebarInfoRole>
        </DashboardSidebarInfo>
      </DashboardSidebarUserInfo>
      <VerticalSpacing />
      <DashboardSidebarList>
        {AuthorisedNavbarRoutes.map(({ name, path, NavbarIcon }) => {
          return (
            <DashboardSidebarListItem key={name}>
              <Link to={`/dashboard${path}`}>
                <NavbarIcon />
                {name}
              </Link>
            </DashboardSidebarListItem>
          )
        })}
      </DashboardSidebarList>
    </DashboardSidebarContainer>
  )
}

export default DashboardSidebar
