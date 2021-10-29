import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.spacing[3]}px
    ${({ theme }) => theme.sizes.spacing[7]}px;
`

export const Header = styled.div``

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: ${({ theme }) => theme.sizes.spacing[3]}px;

    &:last-child {
      margin-right: 0;
    }
  }
`
