import Providers from 'helpers/providers/index.providers'
import GlobalStyle from 'helpers/theme/index.global'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import Routes from 'routes/index.routes'

if (module.hot) {
  module.hot.accept()
}

render(
  <Providers>
    <Routes />
    <GlobalStyle />
  </Providers>,
  document.getElementById('root')
)
