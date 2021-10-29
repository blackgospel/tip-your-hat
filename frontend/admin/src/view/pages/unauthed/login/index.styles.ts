import styled from 'styled-components/macro'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.padding}px;
  max-width: ${({ theme }) => theme.sizes.maxWidth.primary}px;
`
