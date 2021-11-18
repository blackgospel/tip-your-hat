interface GeneralTheme {
  theme: { [x: string]: { [x: string]: any } }
}

export const baseColors =
  (variant = 'statusMainColors', type: string) =>
  (props: GeneralTheme) =>
    props.theme[variant][type]

export const whiteColors =
  () => (props: { theme: { colors: { white: any[] } } }) =>
    props.theme.colors.white[2]

export const blackColors =
  () => (props: { theme: { colors: { black: any[] } } }) =>
    props.theme.colors.black[2]

export const mainColors = (
  type:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'info'
    | 'error'
    | 'warning'
) => baseColors('statusMainColors', type)

export const darkColors = (
  type:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'info'
    | 'error'
    | 'warning'
) => baseColors('statusDarkColors', type)

export const lightColors = (
  type:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'info'
    | 'error'
    | 'warning'
) => baseColors('statusLightColors', type)

export const surfaceColors = (type: 'background' | 'surface' | 'error') =>
  baseColors('surfaceColors', type)

export const typographyColors = (
  type: 'primary' | 'secondary' | 'background' | 'surface' | 'error' | 'muted'
) => baseColors('typographyColors', type)

export const spacings =
  (type = 3) =>
  (props: GeneralTheme) =>
    props.theme.spacings[type]

export const borderRadius =
  (type: 'small' | 'medium' | 'large' | 'circle' = 'small') =>
  (props: GeneralTheme) =>
    props.theme.borderRadiuses[type]

export const transitions =
  (type: 'primary' = 'primary') =>
  (props: GeneralTheme) =>
    props.theme.transition[type]
