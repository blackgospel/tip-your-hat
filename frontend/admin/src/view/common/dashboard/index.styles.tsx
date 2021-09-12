import media from 'helpers/theme/media'
import styled from 'styled-components/macro'

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'header'
    'main';
  height: 100vh;
  width: 100%;

  ${media.xs`
    grid-template-columns: 240px 1fr;
    grid-template-areas:
    'sidebar header'
    'sidebar main';
  `}
`
