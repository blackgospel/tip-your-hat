import React, { useState } from 'react'
import { SelectProps } from '../../index.types'
import {
  FormInput,
  InputContainer,
  SelectHeader,
  SelectHeaderTitle,
  SelectList,
  SelectListItem,
} from './index.styles'
import Error from '../error'

const Select: React.FC<SelectProps> = ({
  name,
  title,
  handleChange,
  fieldError,
  options,
  ...inputProps
}) => {
  const [isListOpen, setIsListOpen] = useState(false)
  const [headerTitle, setHeaderTitle] = useState(title)

  const toggleList = () => {
    setIsListOpen((state) => !state)
  }

  return (
    <InputContainer>
      <FormInput>
        <SelectHeader>
          <SelectHeaderTitle>{headerTitle}</SelectHeaderTitle>
        </SelectHeader>
        {isListOpen && (
          <SelectList>
            {options.map((item) => {
              return <SelectListItem key={item.id}>{item.title}</SelectListItem>
            })}
          </SelectList>
        )}
      </FormInput>
      {fieldError && fieldError[name!] && (
        <Error fieldError={fieldError} name={name} />
      )}
    </InputContainer>
  )
}

export default Select
