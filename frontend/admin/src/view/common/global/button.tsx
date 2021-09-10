import styled from 'styled-components'

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
