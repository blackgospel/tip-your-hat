import 'assets/fonts/index.css'
import theme from 'helpers/theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
