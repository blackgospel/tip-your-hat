const directions = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
}

const createPositionFn =
  (
    position: 'relative' | 'absolute' | 'fixed' | 'sticky' = 'relative',
    parameters?: { t?: number; b?: number; l?: number; r?: number }
  ) =>
  () => {
    const positionMapping = `position: ${position};`
    const positionDirections = parameters
      ? Object.keys(parameters)
          .map(
            (direction: any) =>
              `${directions[direction as keyof typeof directions]}: ${
                parameters[direction as keyof typeof parameters]
              }px;`
          )
          .join('')
      : ''

    return `${positionMapping}${positionDirections}`
  }

export const position = createPositionFn
