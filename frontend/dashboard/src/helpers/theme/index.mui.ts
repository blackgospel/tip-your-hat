import theme from './index.theme'

const palette = {
  ...Object.keys(theme.statusMainColors).reduce(
    (res, item) => ({
      ...res,
      [item]: {
        main: theme.statusMainColors[
          item as keyof typeof theme.statusMainColors
        ],
        dark: theme.statusDarkColors[
          item as keyof typeof theme.statusDarkColors
        ],
        light:
          theme.statusDarkColors[item as keyof typeof theme.statusDarkColors],
      },
    }),
    {}
  ),
}

const typography = {
  fontFamily: theme.fontFamily.primary,
}

const muiTheme = {
  palette,
  typography,
}

export default muiTheme
