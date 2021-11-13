import styled, { css } from 'styled-components/macro'

interface BoxProps {
  children?: React.ReactNode
  flex?: boolean
  grid?: boolean
  smallPadding?: boolean
  bigPadding?: boolean
  h100?: boolean
  w100?: boolean
  flexFill?: boolean
  bgColor?: 'primary' | 'secondary' | 'error'
}

interface FlexProps {
  column?: boolean
  hcenter?: boolean
  vcenter?: boolean
}

const BaseStyles = css<BoxProps>`
  background-color: ${({ theme: { surfaceColors } }) => surfaceColors.surface};

  ${({ smallPadding, theme: { spacings } }) =>
    smallPadding &&
    css`
      padding: ${spacings[3]}px;
    `}

  ${({ bigPadding, theme: { spacings } }) =>
    bigPadding &&
    css`
      padding: ${spacings[6]}px;
    `}

    ${({ bgColor, theme: { statusMainColors } }) =>
    bgColor &&
    css`
      background-color: ${statusMainColors[bgColor]};
    `}

    ${({ h100 }) =>
    h100 &&
    css`
      height: 100%;
    `}

    ${({ w100 }) =>
    w100 &&
    css`
      width: 100%;
    `}

    ${({ flexFill }) =>
    flexFill &&
    css`
      flex: 1 1 auto;
    `}
`

const Container = styled.div``

const FlexContainer = styled.div<FlexProps>`
  display: flex;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  ${({ vcenter }) =>
    vcenter &&
    css`
      justify-content: center;
    `}

  ${({ hcenter }) =>
    hcenter &&
    css`
      align-items: center;
    `}
`

const GridContainer = styled.div`
  display: grid;
`

export const Box = styled(
  ({ children, flex, grid, ...otherProps }: BoxProps & FlexProps) => {
    const BoxType = flex ? FlexContainer : grid ? GridContainer : Container
    return <BoxType {...otherProps}>{children}</BoxType>
  }
)`
  ${BaseStyles};
`

// export const Box = styled(BaseBox)``
