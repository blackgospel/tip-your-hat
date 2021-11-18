import { PopoverOrigin } from '@mui/material'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import React from 'react'
import styled, { css } from 'styled-components/macro'

interface MenuProps
  extends Pick<MuiMenuProps, 'anchorEl' | 'open' | 'onClose'> {
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
  size?: 'small' | 'medium' | 'large'
  options: { icon: React.ReactNode; text: string }[]
}

const menuSize = {
  small: 'auto',
  medium: 240,
  large: 320,
}

const BaseStyles = css``

const BaseMenu = styled(
  ({ options, size = 'medium', ...otherProps }: MenuProps) => (
    <MuiMenu
      PaperProps={{
        elevation: 0,
        ...(size && {
          sx: {
            width: `${menuSize[size as keyof typeof menuSize]}px`,
            maxWidth: '100%',
          },
        }),
      }}
      {...otherProps}
    >
      {options.map(({ icon, text }, index) => {
        return (
          <MuiMenuItem key={text + index} sx={{ fontWeight: 300 }}>
            {icon && <MuiListItemIcon>{icon}</MuiListItemIcon>}
            {text}
          </MuiMenuItem>
        )
      })}
    </MuiMenu>
  )
)`
  ${BaseStyles};
`

export const Menu = styled(BaseMenu)``
