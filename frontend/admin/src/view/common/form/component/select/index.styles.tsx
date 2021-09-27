import { Select } from '@mui/material'
import styled from 'styled-components/macro'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.sizes.padding}px;
`

export const FormSelectInput = styled(Select)`
  ${({ theme }) => theme.fonts.h4};
`
