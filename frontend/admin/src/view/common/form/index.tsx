import React from 'react'
import Input from './component/input'
import Error from './component/error'
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

  return (
    <FormContainer onSubmit={handleSubmit}>
      {formattedChildren}
      <FormButton>{loading ? 'Submitting' : 'Submit'}</FormButton>
      {error && <Error error={error} />}
    </FormContainer>
  )
}

Form.Input = Input
Form.Error = Error

export default Form
