import Dashboard from 'common/dashboard'
import { Suspense } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { AuthorisedRoutes } from './index.routes'
import { AuthedContainer } from './index.styles'
import PrivateRoute from './private-route'

const AuthedRoutes = () => {
  return (
    <AuthedContainer>
      <Dashboard>
        <Suspense fallback="Loading...">
          <Switch>
            {AuthorisedRoutes.map(({ ...rest }) => {
              return <PrivateRoute key={rest.path} {...rest} />
            })}
            <Redirect to={AuthorisedRoutes[0].path} />
          </Switch>
        </Suspense>
      </Dashboard>
    </AuthedContainer>
  )
}

export default AuthedRoutes
