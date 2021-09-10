import React from 'react'
import { InputProps } from '../../index.types'
import Error from '../error'
import { FormInput, InputContainer } from './index.styles'

const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  fieldError,
  ...inputProps
}) => {
  return (
    <InputContainer>
      <FormInput name={name} onChange={handleChange} {...inputProps} />
      {fieldError && fieldError[name] && (
        <Error fieldError={fieldError} name={name} />
      )}
    </InputContainer>
  )
}

export default Input
