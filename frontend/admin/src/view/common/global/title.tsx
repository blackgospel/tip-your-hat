import styled from 'styled-components'

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.smallTitle};
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
`
