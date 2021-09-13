import Typography from 'common/global/typography'
import styled from 'styled-components/macro'

export const DropdownContainer = styled.div`
  display: flex;
`

export const DropdownMenuIcon = styled.span`
  margin-right: ${({ theme }) => theme.sizes.small}px;
`

export const DropdownMenuText = styled(Typography)``
