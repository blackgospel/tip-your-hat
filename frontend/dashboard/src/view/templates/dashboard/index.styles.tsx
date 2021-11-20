import { position } from 'helpers/theme/funcs/position.funcs'
import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

interface DashboardProps {
  children: React.ReactNode
}

export const DashboardContainer = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex column flexFill w100 h100 {...otherProps}>
      {children}
    </Box>
  )
)`
  ${position('fixed')}
`
