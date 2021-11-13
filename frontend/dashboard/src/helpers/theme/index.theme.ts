// const colors = {
//   blue: ['#63a4ff', '#1976d2', '#004ba0'],
//   green: ['#2e7d32', '#60ad5e', '#005005'],
//   teal: ['#52c7b8', '#009688', '#00675b'],
//   red: ['#ff6659', '#d32f2f', '#9a0007'],
//   orange: ['#ff9d3f', '#ef6c00', '#b53d00'],
//   grey: ['#9e9e9e', '#cfcfcf', '#707070'],
//   purple: ['#9c4dcc', '#6a1b9a', '#38006b'],
//   black: ['#000000', '#000000', '#000000'],
//   white: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
// }

const statusColors = {
  primary: 'purple',
  secondary: 'orange',
  accent: 'yellow',
  success: 'green',
  info: 'teal',
  error: 'red',
  warning: 'orange',
}

const colors = {
  blue: ['#63a4ff', '#1976d2', '#004ba0', '#FFFFFF'],
  green: ['#60ad5e', '#2e7d32', '#005005', '#FFFFFF'],
  teal: ['#52c7b8', '#009688', '#00675b', '#FFFFFF'],
  red: ['#ff6659', '#d32f2f', '#9a0007', '#FFFFFF'],
  orange: ['#ff9d3f', '#ef6c00', '#b53d00', '#FFFFFF'],
  grey: ['#9e9e9e', '#cfcfcf', '#707070', '#000000'],
  purple: ['#d05ce3', '#9c27b0', '#6a0080', '#FFFFFF'],
  yellow: ['#ffff72', '#ffeb3b', '#c8b900', '#000000'],
  black: ['#000000', '#000000', '#000000', '#FFFFFF'],
  white: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000'],
}

const statusMainColors = Object.keys(statusColors).reduce(
  (res, item) => ({
    ...res,
    [item]:
      colors[
        statusColors[item as keyof typeof statusColors] as keyof typeof colors
      ][1],
  }),
  {}
)

const statusLightColors = Object.keys(statusColors).reduce(
  (res, item) => ({
    ...res,
    [item]:
      colors[
        statusColors[item as keyof typeof statusColors] as keyof typeof colors
      ][0],
  }),
  {}
)

const statusDarkColors = Object.keys(statusColors).reduce(
  (res, item) => ({
    ...res,
    [item]:
      colors[
        statusColors[item as keyof typeof statusColors] as keyof typeof colors
      ][2],
  }),
  {}
)

const surfaceColors = {
  background: colors.white[2],
  surface: colors.white[2],
  error: statusColors.error,
}

const typographyColors = {
  primary: colors.white[1],
  secondary: colors.black[1],
  background: colors.black[1],
  surface: colors.black[1],
  error: colors.white[1],
  muted: colors.grey[1],
}

const fontFamily = {
  primary: 'Product Sans, sans-serif',
}

const spacings = [0, 4, 8, 12, 16, 24, 32, 48, 64]

const fontSizes = [8, 12, 16, 22, 24, 32]

const theme = {
  colors,
  statusMainColors,
  statusLightColors,
  statusDarkColors,
  surfaceColors,
  typographyColors,
  fontFamily,
  spacings,
  fontSizes,
}

export default theme
