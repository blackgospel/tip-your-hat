import MuiBox from '@mui/material/Box'
import MuiButtonBase from '@mui/material/ButtonBase'
import { mr } from 'helpers/theme/index.funcs'
import React from 'react'
import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

interface IconButtonProps {
  children: React.ReactNode
}

interface CustomStyleProps {
  color?: any
  background?: any
  radius?: any
  transition?: any
}

export const DashboardMatchListContainer = styled(
  ({ children, ...otherProps }) => (
    <Box flex hcenter {...otherProps}>
      {children}
    </Box>
  )
)`
  max-width: 70vw;
  overflow-x: scroll;
`

const BaseAvatar: React.FC<IconButtonProps & CustomStyleProps> = ({
  color,
  background,
  transition,
  radius,
  children,
}) => {
  return (
    <MuiBox
      sx={{
        borderRadius: `${radius}px`,
        width: 150,
        padding: '8px',
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
    </MuiBox>
  )
}

export const MatchButton = styled(
  ({
    color,
    background,
    radius,
    transition,
    children,
    ...otherProps
  }: IconButtonProps & CustomStyleProps) => {
    return (
      <MuiButtonBase {...otherProps}>
        <BaseAvatar {...{ color, background, transition, radius }}>
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
)`
  ${mr(3)};

  &:last-child {
    ${mr(0)};
  }
`
