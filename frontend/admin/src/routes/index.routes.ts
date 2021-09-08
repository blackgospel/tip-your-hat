import { BiHome, BiUser } from 'react-icons/bi'
import Dashboard from 'view/pages/authed/dashboard'
import UserManagement from 'view/pages/authed/user-management'
import Home from 'view/pages/unauthed/home'
import Login from 'view/pages/unauthed/login'

export const UnAuthorisedRoutes = [
  {
    name: 'Login',
    exact: true,
    path: '/login',
    Component: Login,
  },
  // {
  //   name: 'Register',
  //   exact: true,
  //   path: '/register',
  //   Component: Register,
  // },
  {
    name: 'Home',
    exact: true,
    path: '/',
    Component: Home,
  },
]

export const AuthorisedRoutes = [
  {
    name: 'Dashboard',
    exact: true,
    path: '/',
    Component: Dashboard,
    navbar: true,
    NavbarIcon: BiHome,
  },
  {
    name: 'User Management',
    exact: true,
    path: '/user-management',
    Component: UserManagement,
    navbar: true,
    NavbarIcon: BiUser,
  },
]

export const AuthorisedNavbarRoutes = AuthorisedRoutes.filter(
  ({ navbar }) => navbar
)
