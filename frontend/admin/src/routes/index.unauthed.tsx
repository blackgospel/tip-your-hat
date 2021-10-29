import HomeHeader from 'pages/unauthed/home/components/header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { UnAuthorisedRoutes } from './index.routes'
import { UnAuthedContainer, UnAuthedWrapper } from './index.styles'

const UnauthedRoutes = () => {
  return (
    <UnAuthedContainer>
      <HomeHeader />
      <UnAuthedWrapper>
        <Switch>
          {UnAuthorisedRoutes.map(({ exact, path, Component }, index) => {
            return (
              <Route
                key={index}
                exact={exact}
                path={path}
                component={Component}
              />
            )
          })}
          <Redirect to={UnAuthorisedRoutes[0].path} />
        </Switch>
      </UnAuthedWrapper>
    </UnAuthedContainer>
  )
}

export default UnauthedRoutes
