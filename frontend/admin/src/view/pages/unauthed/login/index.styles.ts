import Typography from 'common/global/typography'
import styled from 'styled-components/macro'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.padding}px;
  max-width: ${({ theme }) => theme.sizes.maxWidth.primary}px;
`

export const LoginTitle = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const LoginDescription = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.muted};
`
