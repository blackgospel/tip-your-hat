import logoImage from 'assets/logo.png'
import { Container, ImageLogo } from './index.styles'

const Logo: React.FC = () => {
  return (
    <Container>
      <ImageLogo src={logoImage} alt="Tip Your Hat Logo" />
    </Container>
  )
}

export default Logo
