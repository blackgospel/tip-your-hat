import { BiHome, BiUser } from 'react-icons/bi'
import Dashboard from 'view/pages/authed/dashboard'
import Home from 'view/pages/unauthed/home'
import Login from 'view/pages/unauthed/login'
import Register from 'view/pages/unauthed/register'
import UserManagement from 'view/pages/authed/user-management'

export const UnAuthorisedRoutes = [
  {
    name: 'Home',
    exact: true,
    path: '/',
    Component: Home,
  },
  {
    name: 'Login',
    exact: true,
    path: '/login',
    Component: Login,
  },
  {
    name: 'Register',
    exact: true,
    path: '/register',
    Component: Register,
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
