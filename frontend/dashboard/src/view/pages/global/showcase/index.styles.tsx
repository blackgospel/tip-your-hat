import styled, { css } from 'styled-components/macro'

interface ShowcaseProps {
  noCenter?: boolean
}

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShowcaseSection = styled.section`
  padding: ${({ theme: { spacings } }) => spacings[4]}px;
`

export const ShowcaseComponents = styled.div<ShowcaseProps>`
  display: flex;
  align-items: center;

  ${({ noCenter }) =>
    noCenter &&
    css`
      align-items: initial;
    `}
`
