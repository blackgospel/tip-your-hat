import styled, { css } from 'styled-components/macro'

interface TipsContainerProps {
  loading?: boolean
}

export const TipsManagementContainer = styled.div<TipsContainerProps>`
  height: 100%;
  position: relative;

  ${({ loading }) =>
    loading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`
