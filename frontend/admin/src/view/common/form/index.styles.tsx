import { Button } from 'common/global/button'
import styled from 'styled-components/macro'

export const FormContainer = styled.form``

export const FormButton = styled(Button)`
  width: 100%;
  ${({ theme }) => theme.fonts.h3}
`
