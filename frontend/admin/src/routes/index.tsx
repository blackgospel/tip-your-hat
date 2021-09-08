import useRefreshToken from 'helpers/hooks/useRefreshToken'
import useCurrentUserStore from 'zustands/stores/current-user'
import AuthedRoutes from './index.authed'
import { RouteContainer } from './index.styles'
import UnauthedRoutes from './index.unauthed'

const Routes: React.FC = () => {
  const { loading } = useRefreshToken()
  const { currentUser } = useCurrentUserStore()

  if (loading) {
    return <div>...Loading</div>
  }

  return (
    <RouteContainer>
      {currentUser ? (
        <AuthedRoutes />
      ) : (
        <UnauthedRoutes />
      )}
    </RouteContainer>
  )
}

export default Routes
