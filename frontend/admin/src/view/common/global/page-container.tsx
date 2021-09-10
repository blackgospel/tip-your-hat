import styled, { css } from 'styled-components'

interface PageContainerProps {
  spaceBetween?: boolean
  center?: boolean
}

export const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  flex-direction: column;

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
`
