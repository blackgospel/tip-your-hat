import styled from 'styled-components/macro'

interface SpacingProps {
  space?: 'small' | 'medium' | 'large'
}

enum SpacingSizes {
  small = 2,
  medium = 4,
  large = 6,
}

export const BaseSpacing = styled.div<SpacingProps>`
  margin: ${({ theme: { spacing }, space }) =>
    space ? spacing[SpacingSizes[space]] : spacing[SpacingSizes.small]}px;
`

export const Spacing = styled(BaseSpacing)``

export const HSpacing = styled(BaseSpacing)`
  margin-top: 0;
  margin-bottom: 0;
`

export const VSpacing = styled(BaseSpacing)`
  margin-left: 0;
  margin-right: 0;
`
