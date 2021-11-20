import { pb } from 'helpers/theme/index.funcs'
import styled from 'styled-components/macro'
import { Box } from 'view/atomic'

export const PageContainer = styled(({ children, ...otherProps }) => (
  <Box bigPadding w100 flexFill {...otherProps}>
    {children}
  </Box>
))`
  ${pb(90)}
`
