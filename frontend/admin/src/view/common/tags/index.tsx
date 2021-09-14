import React from 'react'
import { TagContainer } from './index.styles'

export interface TagProps {
  color?: string
  handleClick?: any
}

const Tag: React.FC<TagProps> = ({ children, color, handleClick }) => {
  return (
    <TagContainer color={color} onClick={handleClick}>
      {children}
    </TagContainer>
  )
}

export default Tag
