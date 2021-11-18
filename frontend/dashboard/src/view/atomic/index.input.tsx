import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormControl from '@mui/material/FormControl'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MuiFormLabel from '@mui/material/FormLabel'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import MuiRadioGroup from '@mui/material/RadioGroup'
import { SelectProps as MuiSelectProps } from '@mui/material/Select'
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch'
import MuiTextField, { OutlinedTextFieldProps } from '@mui/material/TextField'
import styled, { css } from 'styled-components/macro'

interface InputProps
  extends Pick<
    OutlinedTextFieldProps,
    | 'onChange'
    | 'children'
    | 'disabled'
    | 'error'
    | 'helperText'
    | 'id'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'value'
  > {
  readOnly?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
}

interface SelectProps extends Pick<MuiSelectProps, 'MenuProps'> {
  options: { value: string; label: string }[]
}

interface SwitchProps
  extends Pick<
    MuiSwitchProps,
    'color' | 'disabled' | 'value' | 'readOnly' | 'required'
  > {
  label: string
  checked: boolean
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void
}

interface RadioProps extends Pick<MuiRadioProps, 'color' | 'disabled'> {
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
  options: { value: string; label: string }[]
  row?: boolean
}

const typeProp =
  (type = 'text') =>
  (props: Record<string, any>) => ({ type, ...props })

const BaseStyles = css<InputProps>`
  width: 100%;
`

const BaseTextInput = styled(
  ({ readOnly, startIcon, endIcon, fullWidth, ...otherProps }: InputProps) => (
    <MuiFormControl fullWidth={fullWidth}>
      <MuiTextField
        {...{ variant: 'outlined', size: 'small' }}
        {...(readOnly && { InputProps: { readOnly: true } })}
        {...(startIcon && {
          InputProps: {
            startAdornment: (
              <MuiInputAdornment position="start">
                {startIcon}
              </MuiInputAdornment>
            ),
          },
        })}
        {...(endIcon && {
          InputProps: {
            endAdornment: (
              <MuiInputAdornment position="end">{endIcon}</MuiInputAdornment>
            ),
          },
        })}
        {...otherProps}
      />
    </MuiFormControl>
  )
)`
  ${BaseStyles};
`

const BaseSelectInput = styled(
  ({ readOnly, options, ...otherProps }: InputProps & SelectProps) => (
    <MuiFormControl fullWidth>
      <MuiTextField
        select
        {...{
          variant: 'outlined',
          size: 'small',
          InputProps: {
            readOnly: readOnly || false,
            style: { fontSize: '80%' },
          },
        }}
        {...{
          SelectProps: {
            MenuProps: {
              PaperProps: { style: { maxHeight: 160 } },
            },
          },
        }}
        {...otherProps}
      >
        {options.map(({ value, label }) => (
          <MuiMenuItem
            sx={{
              fontSize: '70%',
            }}
            key={value}
            value={value}
          >
            {label}
          </MuiMenuItem>
        ))}
      </MuiTextField>
    </MuiFormControl>
  )
)`
  ${BaseStyles};
`

const BaseSwitchInput = styled(({ label, ...otherProps }: SwitchProps) => (
  <MuiFormControlLabel
    control={<MuiSwitch {...{ size: 'small' }} {...otherProps} />}
    label={label}
    labelPlacement="start"
  />
))`
  ${BaseStyles};
`

const BaseRadioInput = styled(
  ({ label, options, color, disabled, ...otherProps }: RadioProps) => (
    <MuiFormControl>
      <MuiFormLabel>{label}</MuiFormLabel>
      <MuiRadioGroup aria-label={label} {...otherProps}>
        {options.map(({ value, label }) => {
          return (
            <MuiFormControlLabel
              key={value}
              control={<MuiRadio size="small" {...{ color, disabled }} />}
              value={value}
              label={label}
            />
          )
        })}
      </MuiRadioGroup>
    </MuiFormControl>
  )
)`
  ${BaseStyles};
`

const BaseCheckboxInput = styled(({ label, ...otherProps }: SwitchProps) => (
  <MuiFormControlLabel
    control={<MuiCheckbox {...otherProps} />}
    label={label}
    labelPlacement="start"
  />
))`
  ${BaseStyles};
`

export const TextInput = styled(BaseTextInput).attrs(typeProp())``

export const PasswordInput = styled(BaseTextInput).attrs(typeProp('password'))``

export const SelectInput = styled(BaseSelectInput).attrs(typeProp('select'))``

export const SwitchInput = styled(BaseSwitchInput)``

export const RadioInput = styled(BaseRadioInput).attrs(typeProp('radio'))``

export const CheckboxInput = styled(BaseCheckboxInput).attrs(
  typeProp('checkbox')
)``
