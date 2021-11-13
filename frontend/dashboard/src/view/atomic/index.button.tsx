import MuiLoadingButton from '@mui/lab/LoadingButton'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import styled, { css } from 'styled-components/macro'

interface ButtonProps
  extends Pick<
    MuiButtonProps,
    Exclude<
      keyof MuiButtonProps,
      'classes' | 'disableFocusRipple' | 'fullWidth' | 'href' | 'size' | 'sx'
    >
  > {
  loading?: boolean
}

const BaseStyles = css<ButtonProps>``

const BaseButton = styled(
  ({ variant = 'contained', loading, ...otherProps }: ButtonProps) => {
    const ButtonType = loading !== undefined ? MuiLoadingButton : MuiButton
    return <ButtonType {...{ variant, loading }} {...otherProps} />
  }
)`
  ${BaseStyles};
`

export const SmallButton = styled(BaseButton)`
  padding: ${({ theme: { spacings } }) => spacings[1]}px
    ${({ theme: { spacings } }) => spacings[4]}px;
`

export const Button = styled(BaseButton)`
  padding: ${({ theme: { spacings } }) => spacings[2]}px
    ${({ theme: { spacings } }) => spacings[5]}px;
`

export const LargeButton = styled(BaseButton)`
  padding: ${({ theme: { spacings } }) => spacings[3]}px
    ${({ theme: { spacings } }) => spacings[6]}px;
`
