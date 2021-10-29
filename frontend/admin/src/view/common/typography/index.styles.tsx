import styled, { css } from 'styled-components/macro'
import { BaseTypographyProps } from '.'

export const BaseTypography = styled.p<BaseTypographyProps>`
  ${({ theme, tag }) => theme.customTypography[tag || 'p2']};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: ${({ theme }) => theme.customTransitions.primary};

  ${({ theme, tag }) =>
    (tag === 'a' || tag === 'link') &&
    css`
      &:hover {
        color: ${theme.colors.menu.text.hover};
      }
    `};

  ${(props) =>
    Object.keys(props).reduce((res, item) => {
      const styles = props.theme.typographyStyles
      if (item in styles === false) return res

      res = { ...res, ...styles[item] }
      return res
    }, {})}
`
