import { FC } from 'react'

export interface DashboardCommonProps {
  name?: string
}

export interface DashboardSidebarProps extends DashboardCommonProps {
  name?: string
}

export interface DashboardHeaderProps extends DashboardCommonProps {
  name?: string
}

export interface DashboardMainProps extends DashboardCommonProps {
  name?: string
}

export interface DashboardSubComponents extends DashboardCommonProps {
  Header: FC<DashboardHeaderProps>
  Main: FC<DashboardMainProps>
  Sidebar: FC<DashboardSidebarProps>
}
