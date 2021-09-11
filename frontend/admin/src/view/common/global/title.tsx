import styled from 'styled-components/macro'

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.smallTitle};
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
`
