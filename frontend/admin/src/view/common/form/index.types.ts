import {
  OutlinedInputProps,
  SelectProps as MuiSelectProps,
} from '@mui/material'
import { FC } from 'react'

export type RawErrorType = [{ message: string; field?: string }]

export type ErrorType = [{ [x: string]: { message: string } }] | null

export type FieldErrorType = { [x: string]: [{ message: string }] } | null

export interface FormProps {
  handleSubmit?: (event: any) => void
  loading?: boolean
  error?: ErrorType
  fieldError?: FieldErrorType
}

export interface InputProps extends OutlinedInputProps {
  name: string
  fieldError?: FieldErrorType
}

export interface SelectProps extends MuiSelectProps {
  name: string
  options: { label: string; value: string | number }[]
  fieldError?: FieldErrorType
}

export interface ErrorProps {
  name?: string
  error?: ErrorType
  fieldError?: FieldErrorType
}

export interface FormSubComponents {
  Select: FC<SelectProps>
  Input: FC<InputProps>
  Error: FC<ErrorProps>
}
