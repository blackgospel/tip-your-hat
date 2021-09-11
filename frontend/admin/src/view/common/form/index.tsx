import React, { FormEvent } from 'react'
import Error from './component/error'
import Input from './component/input'
import { FormButton, FormContainer } from './index.styles'
import { FormProps, FormSubComponents } from './index.types'

const Form: React.FC<FormProps> & FormSubComponents = ({
  handleSubmit,
  loading,
  children,
  error,
  fieldError,
}) => {
  const formattedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      fieldError,
    })
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // if (formattedChildren ) {
    //   const { isEmpty, fieldErrors } = checkEmptyFormValues(formattedChildren)
    //   if(isEmpty) {
    //     set
    //   }
    // }

    if (handleSubmit) {
      handleSubmit(event)
    }
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      {formattedChildren}
      <FormButton disabled={loading}>
        {loading ? 'Submitting' : 'Submit'}
      </FormButton>
      {error && <Error error={error} />}
    </FormContainer>
  )
}

Form.Input = Input
Form.Error = Error

export default Form
