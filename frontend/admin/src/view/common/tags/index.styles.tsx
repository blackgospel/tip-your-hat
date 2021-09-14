import { hover } from 'helpers/theme/media'
import styled from 'styled-components/macro'

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.sizes.base}px;
  padding: ${({ theme }) => theme.sizes.small / 2}px
    ${({ theme }) => theme.sizes.base}px;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  cursor: pointer;
  ${({ theme }) => theme.fonts.h5};
  transition: ${({ theme }) => theme.transitions.primary};

  svg {
    margin-right: ${({ theme }) => theme.sizes.small}px;
  }

  ${hover`
    filter: brightness(1.1);
  `}
`
