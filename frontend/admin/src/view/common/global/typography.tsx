import { HTMLAttributes } from 'react'
import styled from 'styled-components/macro'

interface BaseTypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  textStyles?: string
}

interface TypographyProps extends BaseTypographyProps {
  as?: keyof JSX.IntrinsicElements
}

export const BaseTypography = styled.p<BaseTypographyProps>`
  color: ${({ theme }) => theme.colors.text.primary};
  ${({ theme, textStyles }) => textStyles && theme.fonts[textStyles]};
`

const Typography: React.FC<TypographyProps> = ({ ...props }) => {
  return <BaseTypography as="" {...props} />
}

export default Typography
