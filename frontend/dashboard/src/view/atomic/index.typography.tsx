import { Link } from '@mui/material'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import { LinkProps, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'

interface TypographyProps
  extends Pick<
    MuiTypographyProps,
    Exclude<
      keyof MuiTypographyProps,
      | 'classes'
      | 'gutterBottom'
      | 'noWrap'
      | 'paragraph'
      | 'sx'
      | 'variant'
      | 'align'
    >
  > {
  strong?: boolean
  color?: 'primary' | 'secondary' | 'background' | 'surface' | 'error'
  size?: 'xsmall' | 'small' | 'regular' | 'large'
  href?: string
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

enum TypographySizes {
  h1 = 200,
  h2 = 180,
  h3 = 160,
  h4 = 140,
  h5 = 120,
  h6 = 100,
  subtitle = 110,
  xsmall = 60,
  small = 90,
  regular = 100,
  large = 110,
  caption = 75,
}

const asProp =
  (as = 'p') =>
  (props: Record<string, any>) => ({ as, ...props })

const BaseStyles = css<TypographyProps>`
  color: ${({ theme: { typographyColors }, color }) =>
    color ? typographyColors[color] : typographyColors.background};

  ${({ strong }) =>
    strong &&
    css`
      font-weight: bold;
    `};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
`

const BaseTypography = styled(({ ...otherProps }: TypographyProps) => (
  <MuiTypography {...otherProps} />
))`
  ${BaseStyles};
`

export const H1 = styled(BaseTypography).attrs(asProp('h1'))`
  font-size: ${TypographySizes.h1}%;
`

export const H2 = styled(BaseTypography).attrs(asProp('h2'))`
  font-size: ${TypographySizes.h2}%;
`

export const H3 = styled(BaseTypography).attrs(asProp('h3'))`
  font-size: ${TypographySizes.h3}%;
`

export const H4 = styled(BaseTypography).attrs(asProp('h4'))`
  font-size: ${TypographySizes.h4}%;
`

export const H5 = styled(BaseTypography).attrs(asProp('h5'))`
  font-size: ${TypographySizes.h5}%;
`

export const H6 = styled(BaseTypography).attrs(asProp('h6'))`
  font-size: ${TypographySizes.h6}%;
`

export const Subtitle = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.subtitle}%;
`

export const XSmallText = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.xsmall}%;
`

export const SmallText = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.small}%;
`

export const Text = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.regular}%;
`

export const LargeText = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.large}%;
`

export const MutedText = styled(BaseTypography).attrs(asProp())`
  color: ${({ theme: { typographyColors } }) => typographyColors.muted};
  font-size: ${({ size }) =>
    size ? TypographySizes[size] : TypographySizes.regular}%;
`

export const CaptionText = styled(BaseTypography).attrs(asProp())`
  font-size: ${TypographySizes.caption}%;
`

export const Anchor = styled(
  ({
    href,
    ...otherProps
  }: TypographyProps & Pick<HTMLAnchorElement, 'href'>) => (
    <Link {...{ href, color: 'inherit', underline: 'none' }}>
      <BaseTypography {...otherProps} />
    </Link>
  )
)`
  font-size: ${({ size }) =>
    size ? TypographySizes[size] : TypographySizes.regular}%;
  transition: 150ms opacity ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`

export const RouterLink = styled(
  ({ to, ...otherProps }: TypographyProps & Pick<LinkProps, 'to'>) => (
    <Link component={NavLink} {...{ to, color: 'inherit', underline: 'none' }}>
      <BaseTypography {...otherProps} />
    </Link>
  )
)`
  font-size: ${({ size }) =>
    size ? TypographySizes[size] : TypographySizes.regular}%;
  transition: 150ms opacity ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`
