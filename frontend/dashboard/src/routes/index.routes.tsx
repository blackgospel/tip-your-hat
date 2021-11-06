import Showcase from 'pages/global/showcase/index.showcase'
import { Route, Switch } from 'react-router'
import { RouteContainer } from './index.styles'

const Routes: React.FC = () => {
  return (
    <RouteContainer>
      <Switch>
        <Route exact path="/showcase" component={Showcase} />
      </Switch>
    </RouteContainer>
  )
}

export default Routes
