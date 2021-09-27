import { FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import { SelectProps } from '../../index.types'
import Error from '../error'
import { FormSelectInput, InputContainer } from './index.styles'

const Select: React.FC<SelectProps> = ({
  name,
  fieldError,
  label,
  options,
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
        <FormSelectInput name={name} {...inputProps} label={label}>
          {options.map(({ label, value }, index) => {
            return (
              <MenuItem key={`${label}${index}`} value={value}>
                {label}
              </MenuItem>
            )
          })}
        </FormSelectInput>

        {fieldError && fieldError[name] && (
          <Error fieldError={fieldError} name={name} />
        )}
      </FormControl>
    </InputContainer>
  )
}

export default Select
