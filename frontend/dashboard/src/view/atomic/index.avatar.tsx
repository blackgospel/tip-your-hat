import { Avatar as MuiAvatar, colors } from '@mui/material'
import styled, { css } from 'styled-components/macro'

interface AvatarProps {
  children: React.ReactNode
  bgColor?: any
  onClick?: any
}

const BaseStyles = css`
  width: 36px;
  height: 36px;
`

const BaseAvatar = styled(
  ({ bgColor = colors.purple[300], ...otherProps }: AvatarProps) => (
    <MuiAvatar
      {...{ variant: 'circular' }}
      {...{ sx: { bgColor } }}
      {...otherProps}
    />
  )
)`
  ${BaseStyles};
`

const BaseSquareAvatar = styled(
  ({ bgColor = colors.purple[300], ...otherProps }: AvatarProps) => (
    <MuiAvatar
      {...{ variant: 'rounded' }}
      {...{ sx: { bgColor } }}
      {...otherProps}
    />
  )
)`
  ${BaseStyles};
`

export const CircleAvatar = styled(BaseAvatar)``

export const SquareAvatar = styled(BaseSquareAvatar)``

export const IconAvatar = styled(BaseAvatar)``
