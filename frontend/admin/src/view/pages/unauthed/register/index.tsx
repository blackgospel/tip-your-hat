import React from 'react'
import Form from 'view/common/form'
import { RegisterContainer } from './index.styles'
import { RouteComponentProps } from 'react-router-dom'
import useRegister from './hooks/useRegister'

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const { handleSubmit, fields, onChange, loading, formattedError } =
    useRegister(() => history.push('/'))

  return (
    <RegisterContainer>
      Register
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={formattedError}
        // fieldError={fieldError}
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
    </RegisterContainer>
  )
}

export default Register
