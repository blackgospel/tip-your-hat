import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
`

export const FormInput = styled.input`
  border: 2px solid red;
  padding: ${({ theme }) => theme.sizes.base}px;
  ${({ theme }) => theme.fonts.body4};
`
