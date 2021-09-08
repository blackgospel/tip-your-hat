import { ApolloProvider } from '@apollo/client'
import client from 'helpers/apollo/apollo.config'
import GlobalStyle from 'helpers/theme/global'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

render(
  <ApolloProvider client={client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root')
)
