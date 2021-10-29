import Logo from 'common/logo'
import Typography from 'common/typography'
import { Link } from 'react-router-dom'
import { UnAuthorisedNavbarRoutes } from 'routes/index.routes'
import { Container, Header, HeaderMenu } from './index.styles'

const HomeHeader: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Header>
        <HeaderMenu>
          {UnAuthorisedNavbarRoutes.map(({ path, name }, index) => {
            return (
              <Typography key={index} to={path} tag="link">
                {name}
              </Typography>
            )
          })}
        </HeaderMenu>
      </Header>
    </Container>
  )
}

export default HomeHeader
