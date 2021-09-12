export const colors = {
  primary: '#F96D41',
  secondary: '#25282F',
  black: '#1E1B26',
  white: '#FFFFFF',
  gray: '#2D3038',
  danger: '#ed1c24',
  text: {
    primary: '#1f2d3d',
    hover: '#626c77',
    disabled: '#626c77',
    muted: '#8493a5',
  },
  border: {
    primary: '#dee2e6',
    secondary: '#80bdff',
    muted: '#e9ecef',
  },
  button: {
    primary: '#F96D41',
    hover: '#fba68b',
    disabled: '#fba68b',
    text: '#212529',
  },
  sidebar: {
    background: {
      primary: '#fff',
      hover: '#ccc',
    },
    border: '1px solid #dee2e6',
    text: {
      primary: '#1f2d3d',
      muted: '#8493a5',
      hover: '#30465f',
    },
  },
  menu: {
    text: {
      primary: '#8493a5',
      icon: '#ced4da',
      hover: '#1f2d3d',
    },
  },
}

export const sizes = {
  small: 4,
  base: 8,
  radius: 12,
  normal: 16,
  padding: 24,
  padding2: 36,
  margin: {
    default: 8,
    sm: 6,
    md: 12,
    lg: 18,
    xl: 22,
    xxl: 26,
  },
  spacing: [2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 42, 54, 64, 72, 96, 112],
}

export const fontSizes = {
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  avatar: 26,
}

export const fontWeights = {
  thin: '100',
  light: '200',
  regular1: '300',
  regular2: '400',
  semiBold1: '500',
  semiBold2: '600',
  bold: '700',
  black: '800',
}

export const fonts = {
  largeTitle: {
    'font-size': fontSizes.largeTitle,
    'font-weight': fontWeights.regular2,
    'line-height': 55,
  },
  smallTitle: {
    'font-size': fontSizes.h2,
    'font-weight': fontWeights.bold,
    'line-height': 30,
  },
  h1: {
    'font-size': fontSizes.h1,
    'font-weight': fontWeights.bold,
    'line-height': 36,
  },
  h2: {
    'font-size': fontSizes.h2,
    'font-weight': fontWeights.bold,
    'line-height': 30,
  },
  h3: {
    'font-size': fontSizes.h3,
    'font-weight': fontWeights.bold,
    'line-height': 22,
  },
  h4: {
    'font-size': fontSizes.h4,
    'font-weight': fontWeights.bold,
    'line-height': 22,
  },
  h5: {
    'font-size': fontSizes.h5,
    'font-weight': fontWeights.bold,
    'line-height': 22,
  },
  body1: {
    'font-size': fontSizes.body1,
    'font-weight': fontWeights.regular2,
    'line-height': 36,
  },
  body2: {
    'font-size': fontSizes.body2,
    'font-weight': fontWeights.regular2,
    'line-height': 30,
  },
  body3: {
    'font-size': fontSizes.body3,
    'font-weight': fontWeights.regular2,
    'line-height': 22,
  },
  body4: {
    'font-size': fontSizes.body4,
    'font-weight': fontWeights.regular2,
    'line-height': 22,
  },
  body5: {
    'font-size': fontSizes.body5,
    'font-weight': fontWeights.regular2,
    'line-height': 22,
  },
}

export const breakpoints = {
  xs: 600,
  sm: 960,
  md: 1200,
  lg: 1440,
  xl: 1920,
}

export const transitions = {
  primary: '150ms ease-in-out',
}

export const borderRadius = {
  primary: '0.25em',
}

const fontFamily = {
  primary: 'DM Sans',
  secondary: 'Poppins',
}

const theme = {
  colors,
  sizes,
  fontSizes,
  fontWeights,
  fonts,
  breakpoints,
  transitions,
  borderRadius,
  fontFamily,
}

export default theme