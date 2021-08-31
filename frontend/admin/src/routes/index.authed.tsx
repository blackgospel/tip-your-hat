import { AUTH_PATH } from 'constants/auth'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthorisedNavbarRoutes, AuthorisedRoutes } from './index.routes'
import { AuthedContainer, AuthedNavbar, AuthedNavbarItem } from './index.styles'

const AuthedRoutes = () => {
  return (
    <AuthedContainer>
      <AuthedNavbar>
        {AuthorisedNavbarRoutes.map(({ NavbarIcon, path }) => {
          return (
            <AuthedNavbarItem key={path} to={`/${AUTH_PATH}${path}`}>
              <NavbarIcon />
            </AuthedNavbarItem>
          )
        })}
      </AuthedNavbar>
      <Switch>
        {AuthorisedRoutes.map(({ exact, path, Component }, index) => {
          return (
            <Route
              key={index}
              exact={exact}
              path={`/${AUTH_PATH}${path}`}
              component={Component}
            />
          )
        })}
      </Switch>
    </AuthedContainer>
  )
}

export default AuthedRoutes
