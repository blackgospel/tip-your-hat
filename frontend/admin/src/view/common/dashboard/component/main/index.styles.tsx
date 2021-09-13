import styled from 'styled-components/macro'

export const DashboardMainContainer = styled.main`
  grid-area: main;
  overflow-x: hidden;
`

export const DashboardMainWrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.sizes.padding}px;
`
