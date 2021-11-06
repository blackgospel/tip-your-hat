const colors = {
  blue: ['#63a4ff', '#1976d2', '#004ba0', '#E3F2FD'],
  green: ['#2e7d32', '#60ad5e', '#005005', '#E8F5E9'],
  teal: ['#52c7b8', '#009688', '#00675b', '#E0F2F1'],
  red: ['#ff6659', '#d32f2f', '#9a0007', '#FFEBEE'],
  orange: ['#ff9d3f', '#ef6c00', '#b53d00', '#FFF3E0'],
  grey: ['#9e9e9e', '#cfcfcf', '#707070', '#f5f5f5'],
  purple: ['#9c4dcc', '#6a1b9a', '#38006b', '#F3E5F5'],
  black: ['#000000,', '#000000,', '#000000', '#000000'],
  white: ['#FFFFFF,', '#FFFFFF,', '#FFFFFF', '#FFFFFF'],
}

const statusColors = {
  primary: colors.purple[1],
  secondary: colors.orange[1],
  success: colors.green[1],
  info: colors.teal[1],
  danger: colors.red[1],
  warning: colors.orange[1],
}

const statusLightColors = {
  primary: colors.purple[0],
  secondary: colors.orange[0],
  success: colors.green[0],
  info: colors.teal[0],
  danger: colors.red[0],
  warning: colors.orange[0],
}

const statusDarkColors = {
  primary: colors.purple[2],
  secondary: colors.orange[2],
  success: colors.green[2],
  info: colors.teal[2],
  danger: colors.red[2],
  warning: colors.orange[2],
}

const statusButtonHoverColors = {
  primary: colors.purple[3],
  secondary: colors.orange[3],
  success: colors.green[3],
  info: colors.teal[3],
  danger: colors.red[3],
  warning: colors.orange[3],
}

const surfaceColors = {
  background: colors.white[2],
  surface: colors.white[2],
  error: statusColors.danger,
}

const typographyColors = {
  primary: colors.white[2],
  secondary: colors.black[2],
  background: colors.black[2],
  surface: colors.black[2],
  error: colors.white[2],
}

const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64]

const fontSizes = [8, 12, 16, 22, 24, 32]

const theme = {
  colors,
  statusColors,
  statusLightColors,
  statusDarkColors,
  statusButtonHoverColors,
  surfaceColors,
  typographyColors,
  spacing,
  fontSizes,
}

export default theme
