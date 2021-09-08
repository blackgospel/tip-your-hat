import { Redirect, Route, RouteProps } from 'react-router-dom'
import useCurrentUserStore from 'zustands/stores/current-user'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { currentUser } = useCurrentUserStore()

  return (
    <Route
      {...rest}
      exact
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
