import React, { FormEvent } from 'react'
import Error from './component/error'
import Input from './component/input'
import Select from './component/select'
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

    if (handleSubmit) {
      handleSubmit(event)
    }
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      {formattedChildren}
      <FormButton color="primary" disabled={loading} type="submit">
        {loading ? 'Submitting' : 'Submit'}
      </FormButton>
      {error && <Error error={error} />}
    </FormContainer>
  )
}

Form.Select = Select
Form.Input = Input
Form.Error = Error

export default Form
