import styled from 'styled-components/macro'

interface SpacingProps {
  spacing?: number
}

export const VerticalSpacing = styled.div<SpacingProps>`
  padding: ${({ theme, spacing }) =>
      spacing ? theme.sizes.spacing[spacing] : theme.sizes.radius}px
    0;
`

export const HorizontalSpacing = styled.div<SpacingProps>`
  padding: 0
    ${({ theme, spacing }) =>
      spacing ? theme.sizes.spacing[spacing] : theme.sizes.small}px;
`
