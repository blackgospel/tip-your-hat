import MuiTypography from '@mui/material/Typography'
import styled, { css } from 'styled-components/macro'

interface TypographyProps {
  strong?: boolean
  color?: 'primary' | 'secondary' | 'background' | 'surface' | 'error'
}

const asProp =
  (as = 'p') =>
  () => ({ as })

export const BaseTypography = styled(({ ...otherProps }) => (
  <MuiTypography {...otherProps} />
))<TypographyProps>`
  font-family: Product Sans, sans-serif;
  color: ${({ theme: { typographyColors }, color }) =>
    color ? typographyColors[color] : typographyColors.background};

  ${({ strong }) =>
    strong &&
    css`
      font-weight: bold;
    `};
`

export const H1 = styled(BaseTypography).attrs(asProp('h1'))``

export const H2 = styled(BaseTypography).attrs(asProp('h2'))``

export const H3 = styled(BaseTypography).attrs(asProp('h3'))``

export const H4 = styled(BaseTypography).attrs(asProp('h4'))``

export const H5 = styled(BaseTypography).attrs(asProp('h5'))``

export const H6 = styled(BaseTypography).attrs(asProp('h6'))``

export const SmallText = styled(BaseTypography).attrs(asProp())``

export const Text = styled(BaseTypography).attrs(asProp())``

export const LargeText = styled(BaseTypography).attrs(asProp())``

export const MutedText = styled(BaseTypography).attrs(asProp())``
