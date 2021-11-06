import MuiLoadingButton from '@mui/lab/LoadingButton'
import MuiButton from '@mui/material/Button'
import styled, { css } from 'styled-components/macro'

interface ButtonProps {
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disableFocusRipple?: boolean
  disableElevation?: boolean
  disabled?: boolean
  variant: 'text' | 'contained' | 'outlined'
  bg?: 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'error'
}

export const BaseButton = styled(
  ({ variant = 'contained', loading, ...otherProps }) => {
    return loading ? (
      <MuiLoadingButton {...{ variant, loading }} {...otherProps} />
    ) : (
      <MuiButton {...{ variant }} {...otherProps} />
    )
  }
)`
  font-family: Product Sans, sans-serif;
  background-color: ${({ theme: { statusColors }, bg }) =>
    bg ? statusColors[bg] : statusColors.primary};

  &:hover {
    background-color: ${({ theme: { statusDarkColors }, bg }) =>
      bg ? statusDarkColors[bg] : statusDarkColors.primary};
  }

  ${({ theme: { statusColors, statusButtonHoverColors }, variant, bg }) =>
    variant &&
    variant !== 'contained' &&
    css`
      background-color: transparent;
      color: ${bg ? statusColors[bg] : statusColors.primary};

      &:hover {
        background-color: ${bg
          ? statusButtonHoverColors[bg]
          : statusButtonHoverColors.primary};
        ${variant === 'outlined' &&
        `border-color: ${bg ? statusColors[bg] : statusColors.primary}`}
      }

      ${variant === 'outlined' &&
      `border-color: ${bg ? statusColors[bg] : statusColors.primary}`}
    `}
`

export const SmallButton = styled(BaseButton)<ButtonProps>`
  padding: ${({ theme: { spacing } }) => spacing[1]}px
    ${({ theme: { spacing } }) => spacing[4]}px;
`

export const Button = styled(BaseButton)<ButtonProps>`
  padding: ${({ theme: { spacing } }) => spacing[2]}px
    ${({ theme: { spacing } }) => spacing[5]}px;
`

export const LargeButton = styled(BaseButton)<ButtonProps>`
  padding: ${({ theme: { spacing } }) => spacing[3]}px
    ${({ theme: { spacing } }) => spacing[6]}px;
`
