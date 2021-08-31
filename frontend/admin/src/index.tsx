import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import App from './app'
import client from 'helpers/apollo/apollo.config'
import GlobalStyle from 'helpers/theme/global'

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
