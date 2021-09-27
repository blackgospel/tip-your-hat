import { hover } from 'helpers/theme/media'
import styled from 'styled-components/macro'

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? theme.coreColors[color] : theme.coreColors.blue};
  color: ${({ theme }) => theme.coreColors.white};
  margin-right: ${({ theme }) => theme.sizes.base}px;
  padding: ${({ theme }) => theme.sizes.small / 2}px
    ${({ theme }) => theme.sizes.base}px;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  ${({ theme }) => theme.fonts.h5};
  transition: ${({ theme }) => theme.customTransitions.primary};
  text-transform: capitalize;

  svg {
    margin-right: ${({ theme }) => theme.sizes.small}px;
  }

  ${hover`
    filter: brightness(1.1);
  `}
`
