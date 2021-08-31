import React from 'react'
import { RouteContainer } from './index.styles'
import useRouter from 'helpers/hooks/useRouter'
import { AUTH_PATH } from 'constants/auth'
import AuthedRoutes from './index.authed'
import UnauthedRoutes from './index.unauthed'

const Routes: React.FC = () => {
  const router = useRouter()

  return (
    <RouteContainer>
      {router.pathname.includes(AUTH_PATH) ? (
        <AuthedRoutes />
      ) : (
        <UnauthedRoutes />
      )}
    </RouteContainer>
  )
}

export default Routes
