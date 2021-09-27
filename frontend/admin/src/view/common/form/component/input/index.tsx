import { FormControl, InputLabel } from '@mui/material'
import React from 'react'
import { InputProps } from '../../index.types'
import Error from '../error'
import { FormTextInput, InputContainer } from './index.styles'

const Input: React.FC<InputProps> = ({
  name,
  fieldError,
  label,
  required,
  ...inputProps
}) => {
  return (
    <InputContainer>
      <FormControl
        required={required}
        error={Boolean(fieldError && fieldError[name])}
      >
        <InputLabel>{label}</InputLabel>
        <FormTextInput name={name} {...inputProps} label={label} />

        {fieldError && fieldError[name] && (
          <Error fieldError={fieldError} name={name} />
        )}
      </FormControl>
    </InputContainer>
  )
}

export default Input
