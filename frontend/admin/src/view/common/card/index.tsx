import { Card as MuiCard, CardContent } from '@mui/material'
import { CardContainer } from './index.styles'

const Card: React.FC = ({ children }) => {
  return (
    <CardContainer>
      <MuiCard>
        <CardContent>{children}</CardContent>
      </MuiCard>
    </CardContainer>
  )
}

export default Card
