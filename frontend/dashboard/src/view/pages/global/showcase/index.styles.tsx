import styled from 'styled-components/macro'

export const ShowcaseContainer = styled.div`
  display: flex;
`

export const ShowcaseSection = styled.section`
  padding: ${({ theme: { spacing } }) => spacing[4]}px;
`

export const ShowcaseComponents = styled.div`
  display: flex;
  align-items: center;
`
