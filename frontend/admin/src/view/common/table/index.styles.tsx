import Typography from 'common/global/typography'
import styled from 'styled-components/macro'

export const TableContainer = styled.div``

export const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TableTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.radius}px;
  ${({ theme }) => theme.fonts.h3};
`

export const TableDescription = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.radius}px;
  ${({ theme }) => theme.fonts.body3};
`

export const TableHeaderSearchContainer = styled.div``

export const TableHeaderButtonContainer = styled.div``
