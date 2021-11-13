import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

interface DashboardProps {
  children: React.ReactNode
}

interface ToggleProps {
  icon: React.ReactNode
  onClick: () => void
}

export const DashboardContainer = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box flex flexFill bigPadding {...otherProps}>
      {children}
    </Box>
  )
)``

export const DashboardWrapper = styled(
  ({ children, ...otherProps }: DashboardProps) => (
    <Box grid flexFill {...otherProps}>
      {children}
    </Box>
  )
)`
  position: relative;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
`

export const DashboardNavbarToggle = styled(
  ({ icon, ...otherProps }: ToggleProps) => (
    <Box flex {...otherProps}>
      {icon}
    </Box>
  )
)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { statusMainColors } }) =>
    statusMainColors.primary};
  border-radius: 100%;
  color: ${({ theme: { surfaceColors } }) => surfaceColors.surface};
  padding: ${({ theme: { spacings } }) => spacings[2]}px;
  cursor: pointer;
`
