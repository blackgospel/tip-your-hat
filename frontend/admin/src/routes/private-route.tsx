import { ComponentType, LazyExoticComponent } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import useCurrentUserStore from 'zustands/stores/current-user'

interface PrivateRouteProps extends RouteProps {
  path: string
  exact: boolean
  component?: LazyExoticComponent<ComponentType<any>>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { currentUser } = useCurrentUserStore()

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser && rest.component ? (
          <rest.component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
