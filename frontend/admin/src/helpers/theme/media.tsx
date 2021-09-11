import { css } from 'styled-components'
import { breakpoints } from './theme'

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc = {
    ...acc,
    [label]: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (min-width: ${(breakpoints as any)[label]}px) {
        ${css(literals, ...args)};
      }
    `,
  }

  return acc
}, {})

export const hover = (literals: TemplateStringsArray, ...args: any[]) => css`
  @media (hover: hover) {
    &:hover {
      ${css(literals, ...args)};
    }
  }
`
