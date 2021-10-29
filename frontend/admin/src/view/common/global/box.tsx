import { Box as MuiBox } from '@mui/system'
import styled from 'styled-components/macro'

const BaseBox = styled(MuiBox)`
  display: flex;
  flex-direction: column;
`

const Box: React.FC = ({ children, ...props }) => {
  return <BaseBox {...props}>{children}</BaseBox>
}

export default Box
