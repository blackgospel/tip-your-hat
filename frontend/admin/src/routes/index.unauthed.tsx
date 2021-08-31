import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
      </Switch>
    </UnauthedContainer>
  )
}

export default UnauthedRoutes
