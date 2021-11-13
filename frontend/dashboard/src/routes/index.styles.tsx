import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

export const RouteContainer = styled(({ children, ...otherProps }) => (
  <Box flex flexFill column {...otherProps}>
    {children}
  </Box>
))`
  position: relative;
`
