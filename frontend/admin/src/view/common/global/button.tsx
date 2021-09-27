import { Button as MuiButton } from '@mui/material'
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
