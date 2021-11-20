import Matches from 'pages/authed/matches/index.matches'
import Players from 'pages/authed/players/index.players'
import Trends from 'pages/authed/trends/index.trends'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardTemplate from 'view/templates/dashboard/template.dashboard'

const AuthedRoutes = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardTemplate />,
      children: [
        { element: <Navigate to="/dashboard/trends" replace /> },
        { path: 'trends', element: <Trends /> },
        { path: 'matches', element: <Matches /> },
        { path: 'players', element: <Players /> },
      ],
    },
  ])
}

export default AuthedRoutes
