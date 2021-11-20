import { mb, ml } from 'helpers/theme/index.funcs'
import styled from 'styled-components/macro'
import { Box, CaptionText, SmallText } from 'view/atomic'

export const Container = styled(Box)``

export const TimeBox = styled(Box)`
  ${mb(1)};
`

export const Time = styled(CaptionText)``

export const MatchDetailsBox = styled(({ children, ...otherProps }) => (
  <Box flex hcenter between {...otherProps}>
    {children}
  </Box>
))``

export const TeamDetailsBox = styled(({ children, ...otherProps }) => (
  <Box flex hcenter {...otherProps}>
    {children}
  </Box>
))``

export const TeamName = styled(SmallText)`
  ${ml(1)};
`

export const FormBox = styled(({ children, ...otherProps }) => (
  <Box flex {...otherProps}>
    {children}
  </Box>
))``

export const TeamFormBox = styled(({ children, ...otherProps }) => (
  <Box flex center {...otherProps}>
    {children}
  </Box>
))`
  width: 14px;
`

export const TeamForm = styled(SmallText)``
