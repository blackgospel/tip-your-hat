import { FC, InputHTMLAttributes } from 'react'

export type RawErrorType = [{ message: string; field?: string }]

export type ErrorType = [{ [x: string]: { message: string } }] | null

export type FieldErrorType = { [x: string]: [{ message: string }] } | null

export interface FormProps {
  handleSubmit?: (event: any) => void
  loading?: boolean
  error?: ErrorType
  fieldError?: FieldErrorType
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: () => void
  error?: ErrorType
  fieldError?: FieldErrorType
}

export interface SelectProps extends InputProps {
  options: { [x: string]: any }[]
  title?: string
}

export interface ErrorProps {
  error?: ErrorType
  fieldError?: FieldErrorType
  name?: string
}

export interface FormSubComponents {
  // Select: FC<InputProps>
  Input: FC<InputProps>
  Error: FC<ErrorProps>
}
