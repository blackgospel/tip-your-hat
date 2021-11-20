import AuthedRoutes from './authed-routes/index.authed'
import { RouteContainer } from './index.styles'

const Routes: React.FC = () => {
  return (
    <RouteContainer>
      <AuthedRoutes />
    </RouteContainer>
  )
}

export default Routes
