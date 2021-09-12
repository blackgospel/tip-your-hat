import Dashboard from 'common/dashboard'
import { AUTH_PATH } from 'constants/auth'
import { Redirect, Switch } from 'react-router-dom'
import { AuthorisedRoutes } from './index.routes'
import { AuthedContainer } from './index.styles'
import PrivateRoute from './private-route'

const AuthedRoutes = () => {
  return (
    <AuthedContainer>
      <Dashboard>
        <Switch>
          {AuthorisedRoutes.map(({ exact, path, Component }, index) => {
            return (
              <PrivateRoute
                key={index}
                exact={exact}
                path={`/${AUTH_PATH}${path}`}
              >
                <Component />
              </PrivateRoute>
            )
          })}
          <Redirect to={`${AUTH_PATH}${AuthorisedRoutes[0].path}`} />
        </Switch>
      </Dashboard>
    </AuthedContainer>
  )
}

export default AuthedRoutes
