import { Redirect, Route, Switch } from 'react-router-dom'
import { UnAuthorisedRoutes } from './index.routes'
import { UnauthedContainer } from './index.styles'

const UnauthedRoutes = () => {
  return (
    <UnauthedContainer>
      <Switch>
        {UnAuthorisedRoutes.map(({ exact, path, Component }, index) => {
          return (
            <Route
              key={index}
              exact={exact}
              path={path}
              component={Component}
            />
          )
        })}
        <Redirect to={UnAuthorisedRoutes[0].path} />
      </Switch>
    </UnauthedContainer>
  )
}

export default UnauthedRoutes
