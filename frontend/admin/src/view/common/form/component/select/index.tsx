import React, { useState } from 'react'
import { SelectProps } from '../../index.types'
import Error from '../error'
import {
  FormInput,
  InputContainer,
  SelectHeader,
  SelectHeaderTitle,
  SelectList,
  SelectListItem,
} from './index.styles'

const Select: React.FC<SelectProps> = ({
  name,
  title,
  // handleChange,
  fieldError,
  options,
  // ...inputProps
}) => {
  const [isListOpen, _setIsListOpen] = useState(false)
  const [headerTitle, _setHeaderTitle] = useState(title)

  // const toggleList = () => {
  //   setIsListOpen((state) => !state)
  // }

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
