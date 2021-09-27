import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TipsManagement from 'pages/authed/tips-management'
import Dashboard from 'view/pages/authed/dashboard'
import UserManagement from 'view/pages/authed/user-management'
import Login from 'view/pages/unauthed/login'

export const UnAuthorisedRoutes = [
  {
    name: 'Login',
    exact: true,
    path: '/',
    Component: Login,
  },
  // {
  //   name: 'Register',
  //   exact: true,
  //   path: '/register',
  //   Component: Register,
  // },
  // {
  //   name: 'Home',
  //   exact: true,
  //   path: '/',
  //   Component: Home,
  // },
]

export const AuthorisedRoutes = [
  {
    name: 'Dashboard',
    exact: true,
    path: '/',
    Component: Dashboard,
    navbar: true,
    NavbarIcon: HomeRoundedIcon,
  },
  {
    name: 'User Management',
    exact: true,
    path: '/user-management',
    Component: UserManagement,
    navbar: true,
    NavbarIcon: GroupRoundedIcon,
  },
  {
    name: 'Tips Management',
    exact: true,
    path: '/tips-management',
    Component: TipsManagement,
    navbar: true,
    NavbarIcon: AddShoppingCartRoundedIcon,
  },
]

export const AuthorisedNavbarRoutes = AuthorisedRoutes.filter(
  ({ navbar }) => navbar
)
