import { css } from 'styled-components'
import theme from './theme'

export default Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const hover = (...args) => css`
  @media (hover: hover) {
    &:hover {
      ${css(...args)};
    }
  }
`

export const noHover = (...args) => css`
  @media (hover: none) {
    ${css(...args)};
  }
`
