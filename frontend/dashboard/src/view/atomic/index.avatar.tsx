import { Avatar as MuiAvatar, colors } from '@mui/material'
import styled, { css } from 'styled-components/macro'

interface AvatarProps {
  children: React.ReactNode
  bgColor?: any
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

export const CircleAvatar = styled(BaseAvatar)``
