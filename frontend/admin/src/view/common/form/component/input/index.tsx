import React from 'react'
import { InputProps } from '../../index.types'
import { FormInput, InputContainer } from './index.styles'
import Error from '../error'

const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  fieldError,
  ...inputProps
}) => {
  return (
    <InputContainer>
      <FormInput name={name} onChange={handleChange} {...inputProps} />
      {fieldError && fieldError[name!] && (
        <Error fieldError={fieldError} name={name} />
      )}
    </InputContainer>
  )
}

export default Input
