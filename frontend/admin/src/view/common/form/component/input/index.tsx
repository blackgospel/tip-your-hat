import React from 'react'
import { InputProps } from '../../index.types'
import Error from '../error'
import { FormInput, FormLabel, InputContainer, Required } from './index.styles'

const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  fieldError,
  label,
  required,
  ...inputProps
}) => {
  return (
    <InputContainer>
      {label && (
        <FormLabel>
          {label} {required && <Required>*</Required>}
        </FormLabel>
      )}
      <FormInput name={name} onChange={handleChange} {...inputProps} />
      {fieldError && fieldError[name] && (
        <Error fieldError={fieldError} name={name} />
      )}
    </InputContainer>
  )
}

export default Input
