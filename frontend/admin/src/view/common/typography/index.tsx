import { Link } from 'react-router-dom'
import { BaseTypography } from './index.styles'

export interface BaseTypographyStylesProps {
  textCenter?: boolean
  textRight?: boolean
  textLeft?: boolean
}

export interface BaseTypographyProps extends BaseTypographyStylesProps {
  tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'strong'
    | 'a'
    | 'link'
  color?: string
  to?: string
}

const Typography: React.FC<BaseTypographyProps> = ({
  children,
  tag = 'p2',
  color,
  to = '',
  ...props
}) => {
  const defaultTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'strong'].reduce(
    (res, item) => ({ ...res, [item]: item }),
    {}
  )

  const ParagraphyTags = ['p1', 'p2', 'p3', 'p4'].reduce(
    (res, item) => ({ ...res, [item]: 'p' }),
    {}
  )

  const menuTags = ['a', 'link'].reduce(
    (res, item) => ({ ...res, [item]: item === 'a' ? 'a' : Link }),
    {}
  )

  const htmlTag: any = {
    ...defaultTags,
    ...ParagraphyTags,
    ...menuTags,
  }

  return (
    <BaseTypography {...{ as: htmlTag[tag], tag, to, color }} {...props}>
      {children}
    </BaseTypography>
  )
}

export default Typography
