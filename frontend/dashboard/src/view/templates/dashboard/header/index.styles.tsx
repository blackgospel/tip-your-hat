import MuiAvatar from '@mui/material/Avatar'
import MuiButtonBase from '@mui/material/ButtonBase'
import MuiDivider from '@mui/material/Divider'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiListItemText from '@mui/material/ListItemText'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiPopover, {
  PopoverProps as MuiPopoverProps,
} from '@mui/material/Popover'
import { IconLockOpen } from '@tabler/icons'
import { position } from 'helpers/theme/funcs/position.funcs'
import {
  borderRadius,
  darkColors,
  px,
  whiteColors,
} from 'helpers/theme/index.funcs'
import React from 'react'
import styled from 'styled-components/macro'
import { Box, H6, MutedText, SmallButton, Text, VSpacing } from 'view/atomic'

interface DashboardProps {
  children: React.ReactNode
  onClick?: any
}

interface IconButtonProps {
  children: React.ReactNode
}

interface MenuProps
  extends Pick<MuiPopoverProps, 'anchorEl' | 'open' | 'onClose'> {
  options: { icon: React.ReactNode; text: string }[]
  handleClose: any
}

interface CustomStyleProps {
  color?: any
  background?: any
  radius?: any
  transition?: any
}

const BaseAvatar: React.FC<Partial<IconButtonProps> & CustomStyleProps> = ({
  color,
  background,
  transition,
  children,
}) => {
  return (
    <MuiAvatar
      variant="rounded"
      sx={{
        cursor: 'pointer',
        transition,
        background: background.primary,
        color: color.primary,
        svg: {
          transition,
          color: color.primary,
        },
        '&:hover': {
          background: background.hover,
          color: color.hover,
          svg: {
            color: '#FFFFFF',
          },
        },
      }}
    >
      {children}
    </MuiAvatar>
  )
}

const NavIconButton = styled(
  ({
    color,
    background,
    radius,
    transition,
    children,
    ...otherProps
  }: IconButtonProps & CustomStyleProps) => {
    return (
      <MuiButtonBase
        sx={{ borderRadius: `${radius}px`, overflow: 'hidden' }}
        {...otherProps}
      >
        <BaseAvatar {...{ color, background, transition }}>
          {children}
        </BaseAvatar>
      </MuiButtonBase>
    )
  }
).attrs(
  ({
    theme: {
      statusDarkColors,
      statusMainColors,
      colors,
      borderRadiuses,
      transition,
    },
  }) => ({
    color: {
      primary: `${colors.white[2]}B3`,
      hover: colors.white[2],
    },
    background: {
      primary: statusMainColors.primary,
      hover: statusDarkColors.primary,
    },
    radius: borderRadiuses.small,
    transition: transition.primary,
  })
)``

export const Container = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex {...otherProps}>
      {children}
    </Box>
  )
)`
  height: 80px;
  width: 98vw;
  ${position('absolute', { b: 0, r: 0 })};
  background-color: ${darkColors('primary')}d4;
  border-top-left-radius: ${borderRadius('large')}px;
`

export const ImageContainer = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex center {...otherProps}>
      {children}
    </Box>
  )
)`
  width: 142px;
`

export const Image = styled(({ children, ...otherProps }: DashboardProps) => (
  <Box flex center {...otherProps}>
    {children}
  </Box>
))`
  width: 65px;
`

export const NavContainer = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex w100 between hcenter {...otherProps}>
      {children}
    </Box>
  )
)`
  background-color: ${whiteColors()}36;
  border-top-left-radius: ${borderRadius('large')}px;
  ${px(5)};
`

export const NavGroup = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex hcenter {...otherProps}>
      {children}
    </Box>
  )
)``

export const NavItem = styled(({ children, ...otherProps }: DashboardProps) => (
  <Box {...otherProps}>
    <NavIconButton>{children}</NavIconButton>
  </Box>
))`
  svg {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const NavAvatar = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box {...otherProps}>
      <NavIconButton>{children}</NavIconButton>
    </Box>
  )
)`
  color: rgba(255, 255, 255, 0.5);
`

export const NavMenu = styled(
  ({
    background,
    radius,
    transition,
    handleClose,
    options,
    ...otherProps
  }: MenuProps & CustomStyleProps) => (
    <MuiPopover
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        variant: 'outlined',
        sx: {
          mb: 2.5,
          mr: 0.5,
          overflow: 'inherit',
          width: 200,
        },
      }}
      {...otherProps}
    >
      <Box smallPadding>
        <H6>Seun Adesina</H6>
        <VSpacing space="small" />
        <MutedText size="small">seun@ade.com</MutedText>
      </Box>

      <MuiDivider />

      <Box smallPadding>
        {options.map(({ text, icon }: any, index: any) => {
          return (
            <MuiMenuItem
              key={text + index}
              onClick={handleClose}
              sx={{
                transition,
                borderRadius: `${radius}px`,
                '&:hover': {
                  background: background.hover,
                },
              }}
            >
              <MuiListItemIcon>{icon}</MuiListItemIcon>

              <MuiListItemText>
                <Text>{text}</Text>
              </MuiListItemText>
            </MuiMenuItem>
          )
        })}
      </Box>

      <MuiDivider />

      <Box smallPadding>
        <SmallButton
          variant="text"
          fullWidth
          startIcon={<IconLockOpen />}
          onClick={handleClose}
        >
          Logout
        </SmallButton>
      </Box>
    </MuiPopover>
  )
).attrs(({ theme: { statusLightColors, borderRadiuses, transition } }) => ({
  background: {
    hover: statusLightColors.primary,
  },
  radius: borderRadiuses.xsmall,
  transition: transition.primary,
}))``
