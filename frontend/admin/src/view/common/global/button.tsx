import { hover } from 'helpers/theme/media'
import { colors } from 'helpers/theme/theme'
import styled, { css } from 'styled-components/macro'
import { mapToTheme as theme } from 'styled-map'

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.base}px
    ${({ theme }) => theme.sizes.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme('transitions', 'primary')};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  svg {
    margin-right: ${({ theme }) => theme.sizes.margin.sm}px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.button.disabled};
      color: ${colors.text.disabled};
    `}

  ${hover`
    filter: brightness(1.2);
  `}
`

export const ButtonLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`
