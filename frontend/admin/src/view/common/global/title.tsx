import styled from 'styled-components/macro'

export const Title = styled.h1`
  ${({ theme }) => theme.dashboardFonts.title};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.padding}px;
`
