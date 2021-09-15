import { Button as MuiButton } from '@material-ui/core'
import styled, { css } from 'styled-components/macro'

export const Button = styled(MuiButton)`
  && {
    ${({ variant, theme }) =>
      variant && variant !== 'contained'
        ? css`
            color: ${theme.colors.secondary};
          `
        : css`
            color: ${theme.coreColors.white};
          `}
    text-transform: capitalize;
  }
`
