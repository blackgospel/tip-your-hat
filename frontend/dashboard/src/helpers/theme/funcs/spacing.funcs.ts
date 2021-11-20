const createSpacingFn =
  (parameters: any[]) =>
  (multiplier: number) =>
  (props: { theme: { spacings: any[] } }) => {
    const value = props.theme.spacings[multiplier] || multiplier
    return parameters.map((param: any) => `${param}: ${value}px;`).join('')
  }

export const m = createSpacingFn(['margin'])
export const mt = createSpacingFn(['margin-top'])
export const mb = createSpacingFn(['margin-bottom'])
export const ml = createSpacingFn(['margin-left'])
export const mr = createSpacingFn(['margin-right'])
export const mx = createSpacingFn(['margin-left', 'margin-right'])
export const my = createSpacingFn(['margin-top', 'margin-bottom'])

export const p = createSpacingFn(['padding'])
export const pt = createSpacingFn(['padding-top'])
export const pb = createSpacingFn(['padding-bottom'])
export const pl = createSpacingFn(['padding-left'])
export const pr = createSpacingFn(['padding-right'])
export const px = createSpacingFn(['padding-left', 'padding-right'])
export const py = createSpacingFn(['padding-top', 'padding-bottom'])
