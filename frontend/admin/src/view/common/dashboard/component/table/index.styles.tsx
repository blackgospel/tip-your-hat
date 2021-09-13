import Typography from 'common/global/typography'
import styled from 'styled-components/macro'

export const DashboardTableContainer = styled.div``

export const DashboardTableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DashboardTableTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.radius}px;
  ${({ theme }) => theme.fonts.h3};
`

export const DashboardTableDescription = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.radius}px;
  ${({ theme }) => theme.fonts.body3};
`

export const DashboardTableHeaderSearchContainer = styled.div``

export const DashboardTableHeaderButtonContainer = styled.div``
