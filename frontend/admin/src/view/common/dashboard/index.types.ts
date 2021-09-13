import { TableProps } from '@material-ui/core'
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

export interface DashboardTableProps extends TableProps {
  data: any
  columns: any
  title?: string
  description?: string
}

export interface DashboardTagProps extends DashboardCommonProps {
  color?: string
  handleClick?: any
}

export interface DashboardDropdownProps extends DashboardCommonProps {
  icon?: any
  menuList: { name: string; icon: any; handleClick: any }[]
}

export interface DashboardSubComponents extends DashboardCommonProps {
  Header: FC<DashboardHeaderProps>
  Main: FC<DashboardMainProps>
  Sidebar: FC<DashboardSidebarProps>
}
