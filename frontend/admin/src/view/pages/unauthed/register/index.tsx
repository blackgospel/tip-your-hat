import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Form from 'view/common/form'
import { PageContainer } from 'view/common/global/page-container'
import useRegister from './hooks/useRegister'

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const { handleSubmit, fields, onChange, loading, error } = useRegister(() =>
    history.push('/login')
  )
  const { errors } = useErrors(error)

  return (
    <PageContainer>
      Register
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={errors.formErrors}
        fieldError={errors.fieldErrors}
      >
        <Form.Input
          name="name"
          placeholder="Name"
          onChange={onChange('name')}
          value={fields.name}
        />
        <Form.Input
          name="email"
          placeholder="Email"
          onChange={onChange('email')}
          value={fields.email}
        />
        <Form.Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange('password')}
          value={fields.password}
        />
      </Form>
    </PageContainer>
  )
}

export default Register
