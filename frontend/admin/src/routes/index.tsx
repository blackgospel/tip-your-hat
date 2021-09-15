import Spinner from 'common/global/spinner'
import useRefreshToken from 'helpers/hooks/useRefreshToken'
import useCurrentUserStore from 'zustands/stores/current-user'
import AuthedRoutes from './index.authed'
import { RouteContainer, RoutesLoading } from './index.styles'
import UnauthedRoutes from './index.unauthed'

const Routes: React.FC = () => {
  const { loading } = useRefreshToken()
  const { currentUser } = useCurrentUserStore()

  if (loading) {
    return (
      <RoutesLoading>
        <Spinner />
      </RoutesLoading>
    )
  }

  return (
    <RouteContainer>
      {currentUser ? <AuthedRoutes /> : <UnauthedRoutes />}
    </RouteContainer>
  )
}

export default Routes
