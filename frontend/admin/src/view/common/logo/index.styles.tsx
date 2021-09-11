import styled from 'styled-components/macro'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`

export const ImageLogo = styled.img`
  width: 36px;
  padding-right: ${({ theme }) => theme.sizes.base / 2}px;
`
