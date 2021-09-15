import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
import 'assets/fonts/index.css'
import theme, { muiTheme } from 'helpers/theme/theme'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <MuiThemeProvider theme={muiTheme}>
        <StylesProvider injectFirst>
          <StyledThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </StyledThemeProvider>
        </StylesProvider>
      </MuiThemeProvider>
    </SnackbarProvider>
  )
}

export default App
