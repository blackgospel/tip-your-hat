import { FORM_ERRORS } from './enums'

interface FieldErrorInputs {
  field: string
  message: string
}

/* 
  Error format: 
  formattedErrors: [
    {
      message: '',
      field?: '',
    }
  ]
*/

export const throwFormError = () => {
  console.log('his')
}

export const throwFieldError = (errors: FieldErrorInputs[]) => {
  const formattedErrors = errors.map(({ field, message }) => {
    return {
      field,
      message,
    }
  })

  return {
    type: 'field',
    formattedErrors,
  }
}

export const throwGeneralError = () => {
  console.log('hi')
}

export const checkEmptyFormValues = (inputs: any) => {
  const errors: any[] = []

  const isEmpty = inputs.reduce((_res: any, { props }: { props: any }) => {
    const { required, value, name } = props
    if (!required) return false
    if (value && value !== '') return false

    errors.push(name)
    return true
  }, false)

  return {
    isEmpty,
    ...(errors.length !== 0 && {
      fieldErrors: errors.map((item) => ({
        field: item,
        message: FORM_ERRORS.EMPTY_FIELDS,
      })),
    }),
  }
}
