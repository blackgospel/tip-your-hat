import media from 'helpers/theme/media'
import styled from 'styled-components/macro'

export const DashboardHeaderContainer = styled.header`
  grid-area: header;
  display: none;
  padding: 0 ${({ theme }) => theme.sizes.padding}px;

  ${media.xs`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`

export const DashboardHeaderNotification = styled.div`
  cursor: pointer;

  svg {
    font-size: 24px;
  }
`
