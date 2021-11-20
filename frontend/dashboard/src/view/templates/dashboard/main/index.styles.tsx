import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

export const MainContainer = styled(({ children, ...otherProps }) => (
  <Box flex flexFill w100 {...otherProps}>
    {children}
  </Box>
))`
  overflow-y: hidden;

  & > div {
    overflow-y: scroll;
  }
`
