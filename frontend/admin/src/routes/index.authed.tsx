import { AUTH_PATH } from 'constants/auth'
import useLogout from 'helpers/hooks/useLogout'
import { BiExit } from 'react-icons/bi'
import { Redirect, Switch } from 'react-router-dom'
import { AuthorisedNavbarRoutes, AuthorisedRoutes } from './index.routes'
import {
  AuthedContainer,
  AuthedNavbar,
  AuthedNavbarItem,
  NavbarLogoutItem,
} from './index.styles'
import PrivateRoute from './private-route'

const AuthedRoutes = () => {
  const logout = useLogout()

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
        <NavbarLogoutItem onClick={() => logout()}>
          <BiExit />
        </NavbarLogoutItem>
      </AuthedNavbar>
      <Switch>
        {AuthorisedRoutes.map(({ exact, path, Component }, index) => {
          return (
            <PrivateRoute
              key={index}
              exact={exact}
              path={`/${AUTH_PATH}${path}`}
              component={Component}
            />
          )
        })}
        <Redirect to={`${AUTH_PATH}${AuthorisedRoutes[0].path}`} />
      </Switch>
    </AuthedContainer>
  )
}

export default AuthedRoutes
