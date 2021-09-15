import Typography from 'common/global/typography'
import styled from 'styled-components/macro'

export const TableContainer = styled.div``

export const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.sizes.base}px;
`

export const TableTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes.radius}px;
  /* ${({ theme }) => theme.fonts.h2}; */
`

export const TableHeaderSearchContainer = styled.div``

export const TableHeaderButtonContainer = styled.div``
