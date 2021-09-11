import { Redirect, Route, Switch } from 'react-router-dom'
import { UnAuthorisedRoutes } from './index.routes'

const UnauthedRoutes = () => {
  return (
    <Switch>
      {UnAuthorisedRoutes.map(({ exact, path, Component }, index) => {
        return (
          <Route key={index} exact={exact} path={path} component={Component} />
        )
      })}
      <Redirect to={UnAuthorisedRoutes[0].path} />
    </Switch>
  )
}

export default UnauthedRoutes
