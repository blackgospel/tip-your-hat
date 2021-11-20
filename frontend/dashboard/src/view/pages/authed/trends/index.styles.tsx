import MuiGrid from '@mui/material/Grid'
import styled from 'styled-components/macro'

export const TrendsContainer = styled.div``

export const GridContainer = styled(({ children, ...otherProps }) => (
  <MuiGrid container {...otherProps}>
    {children}
  </MuiGrid>
))`
  width: 100%;
`

export const GridItem = styled(({ children, ...otherProps }) => (
  <MuiGrid item md={6} {...otherProps}>
    {children}
  </MuiGrid>
))``
