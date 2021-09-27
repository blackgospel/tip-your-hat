import styled, { css } from 'styled-components/macro'

interface UserContainerProps {
  isLoading?: boolean
}

export const UserManagementContainer = styled.div<UserContainerProps>`
  height: 100%;
  position: relative;

  ${({ isLoading }) =>
    isLoading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`
