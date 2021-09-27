import { css } from 'styled-components'
import { customBreakpoints } from './theme'

export default Object.keys(customBreakpoints).reduce((acc: any, label) => {
  acc[label as keyof typeof customBreakpoints] = (
    literals: TemplateStringsArray,
    ...args: any[]
  ) => css`
    @media (min-width: ${customBreakpoints[
        label as keyof typeof customBreakpoints
      ]}px) {
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
