import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${({ spaceBetween }: { spaceBetween?: boolean }) =>
    spaceBetween &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.smallTitle};
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: ${({ theme }) => theme.sizes.margin.sm}px;
  }
`

export const ButtonLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`
