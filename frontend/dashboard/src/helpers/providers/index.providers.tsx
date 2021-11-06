import { ApolloProvider } from '@apollo/client'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import 'assets/fonts/index.css'
import client from 'helpers/apollo/apollo.config'
import theme from 'helpers/theme/index.theme'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MuiThemeProvider theme={createTheme()}>
          <StyledThemeProvider theme={theme}>
            <BrowserRouter>{children}</BrowserRouter>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </SnackbarProvider>
    </ApolloProvider>
  )
}

export default Providers
