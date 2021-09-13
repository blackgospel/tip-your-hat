import { Card as MuiCard, CardContent } from '@material-ui/core'
import { CardContainer } from './index.styles'

const Card: React.FC = ({ children }) => {
  return (
    <CardContainer>
      <MuiCard variant="outlined">
        <CardContent>{children}</CardContent>
      </MuiCard>
    </CardContainer>
  )
}

export default Card
