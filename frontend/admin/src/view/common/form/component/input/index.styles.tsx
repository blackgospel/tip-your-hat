import styled from 'styled-components/macro'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.sizes.padding}px;
`

export const FormInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: ${({ theme }) => theme.sizes.small}px
    ${({ theme }) => theme.sizes.radius}px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${({ theme }) => theme.fonts.h4};

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.secondary};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`

export const FormLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.sizes.small}px;
  ${({ theme }) => theme.fonts.h4};
`

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.danger};
`
