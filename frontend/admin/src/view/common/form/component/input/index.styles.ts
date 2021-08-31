import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: 16px;
`

export const FormInput = styled.input`
  border: 2px solid red;
  ${({ theme }) => theme.fonts.body4};
  padding: ${({ theme }) => theme.sizes.base}px;
`
