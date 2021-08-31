import 'assets/fonts/index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import useRefreshToken from 'helpers/hooks/useRefreshToken'
import { ThemeProvider } from 'styled-components'
import theme from 'helpers/theme/theme'

const App: React.FC = () => {
  const { loading } = useRefreshToken()

  if (loading) {
    return <div>...Loading</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
