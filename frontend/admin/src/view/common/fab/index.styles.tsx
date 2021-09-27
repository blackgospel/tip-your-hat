import { hover } from 'helpers/theme/media'
import styled, { css } from 'styled-components/macro'

interface FabContainerProps {
  color?: string
  x?: 'left' | 'center' | 'right'
  y?: 'top' | 'center' | 'bottom'
}

export const FabContainer = styled.div<FabContainerProps>`
  ${({ x, y }) =>
    (x || y) &&
    css`
      position: absolute;
    `}

  ${({ x }) =>
    x &&
    x === 'left' &&
    css`
      left: 0;
    `}

    ${({ x }) =>
    x &&
    x === 'center' &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

    ${({ x }) =>
    x &&
    x === 'right' &&
    css`
      right: 0;
    `}

    ${({ y }) =>
    y &&
    y === 'top' &&
    css`
      top: 0;
    `}

    ${({ y }) =>
    y &&
    y === 'center' &&
    css`
      top: 50%;
      transform: translateY(-50%);
    `}

    ${({ y }) =>
    y &&
    y === 'bottom' &&
    css`
      bottom: 0;
    `}

  button {
    background-color: ${({ theme, color }) =>
      color ? theme.coreColors[color] : theme.colors.primary} !important;
    transition: ${({ theme }) => theme.customTransitions.primary};

    svg {
      color: ${({ theme }) => theme.coreColors.white} !important;
    }

    ${hover`
      filter: brightness(1.2);
    `}
  }
`

export const FabWrapper = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`
