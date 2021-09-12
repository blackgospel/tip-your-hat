import { css } from 'styled-components'
import { breakpoints } from './theme'

export default Object.keys(breakpoints).reduce((acc: any, label) => {
  acc[label as keyof typeof breakpoints] = (
    literals: TemplateStringsArray,
    ...args: any[]
  ) => css`
    @media (min-width: ${breakpoints[label as keyof typeof breakpoints]}px) {
      ${css(literals, ...args)};
    }
  `
  return acc
}, {})

export const hover = (literals: TemplateStringsArray, ...args: any[]) => css`
  @media (hover: hover) {
    &:hover {
      ${css(literals, ...args)};
    }
  }
`
