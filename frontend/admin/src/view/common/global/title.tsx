import styled, { css } from 'styled-components/macro'

interface TitleProps {
  subtitle?: boolean
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.padding}px;
  ${({ theme }) => theme.fonts.largeTitle};

  ${({ subtitle }) =>
    subtitle &&
    css`
      ${({ theme }) => theme.fonts.smallTitle};
    `}
`
