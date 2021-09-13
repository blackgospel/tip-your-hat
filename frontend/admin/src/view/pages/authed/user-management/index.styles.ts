import styled, { css } from 'styled-components/macro'

interface UserContainerProps {
  loading?: boolean
}

export const UserManagementContainer = styled.div<UserContainerProps>`
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
