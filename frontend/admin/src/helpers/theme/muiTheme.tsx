import { createTheme } from '@mui/material/styles'
import { colors } from './theme'

const muiTheme = createTheme({
  transitions: {
    duration: {
      shorter: 200,
    },
  },
  typography: {
    fontFamily: ['DM Sans', 'Poppins'].join(','),
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
  },
  components: {
    MuiInput: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        color: 'primary',
        variant: 'contained',
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiFab: {
      defaultProps: {
        color: 'primary',
        size: 'medium',
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
        size: 'small',
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
})

export default muiTheme
