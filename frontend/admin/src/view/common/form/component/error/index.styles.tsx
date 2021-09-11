import { BaseTypography } from 'common/global/typography'
import styled from 'styled-components/macro'

export const Errors = styled.div``

export const ErrorList = styled.ul``

export const ErrorItem = styled.li`
  margin-top: 2px;
`

export const ErrorItemMessage = styled(BaseTypography)`
  ${({ theme }) => theme.fonts.h5};
  color: ${({ theme }) => theme.colors.danger};
`
