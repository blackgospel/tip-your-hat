import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

interface DashboardProps {
  children: React.ReactNode
}

export const DashboardContainer = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex column flexFill {...otherProps}>
      {children}
    </Box>
  )
)`
  position: relative;
`
