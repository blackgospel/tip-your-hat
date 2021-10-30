import BookRoundedIcon from '@mui/icons-material/BookRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { AUTH_NAVBAR_CATEGORIES } from 'constants/auth'
import { AUTHED_ROUTES, UNAUTHED_ROUTES } from 'constants/routes'
import Home from 'pages/unauthed/home'
import Register from 'pages/unauthed/register'
import { lazy } from 'react'
import Login from 'view/pages/unauthed/login'

export const UnAuthorisedRoutes = [
  {
    name: 'Home',
    exact: true,
    path: UNAUTHED_ROUTES.HOME,
    Component: Home,
  },
  {
    name: 'Register',
    exact: true,
    path: UNAUTHED_ROUTES.REGISTER,
    Component: Register,
    navbar: true,
  },
  {
    name: 'Login',
    exact: true,
    path: UNAUTHED_ROUTES.LOGIN,
    Component: Login,
    navbar: true,
  },
]

export const AuthorisedRoutes = [
  // {
  //   name: 'User Management',
  //   exact: true,
  //   path: '/user-management',
  //   Component: UserManagement,
  //   navbar: AUTH_NAVBAR_CATEGORIES.ADMIN,
  //   NavbarIcon: GroupRoundedIcon,
  // },
  // {
  //   name: 'Tips Management',
  //   exact: true,
  //   path: '/tips-management',
  //   Component: TipsManagement,
  //   navbar: AUTH_NAVBAR_CATEGORIES.ADMIN,
  //   NavbarIcon: AddShoppingCartRoundedIcon,
  // },
  {
    name: 'Bet Pack',
    exact: true,
    path: AUTHED_ROUTES.BET_PACK,
    component: lazy(() => import('pages/authed/bet-pack')),
    navbar: AUTH_NAVBAR_CATEGORIES.OTHER,
    NavbarIcon: HomeRoundedIcon,
  },
  {
    name: 'Guide',
    exact: true,
    path: AUTHED_ROUTES.GUIDE,
    component: lazy(() => import('pages/authed/guide')),
    navbar: AUTH_NAVBAR_CATEGORIES.OTHER,
    NavbarIcon: BookRoundedIcon,
  },
  {
    name: 'Profile',
    exact: true,
    path: AUTHED_ROUTES.PROFILE,
    component: lazy(() => import('pages/authed/profile')),
    navbar: AUTH_NAVBAR_CATEGORIES.OTHER,
    NavbarIcon: PersonRoundedIcon,
  },
]

export const AuthorisedNavbarRoutes = AuthorisedRoutes.filter(
  ({ navbar }) => navbar === AUTH_NAVBAR_CATEGORIES.OTHER
)

export const UnAuthorisedNavbarRoutes = UnAuthorisedRoutes.filter(
  ({ navbar }) => navbar
)
