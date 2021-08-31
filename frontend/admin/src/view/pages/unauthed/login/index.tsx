import React from 'react'
import Form from 'view/common/form'
import { Container } from 'view/common/global'
import { LoginContainer } from './index.styles'
import { RouteComponentProps } from 'react-router-dom'
import useLogin from './hooks/useLogin'

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { handleSubmit, fields, onChange, loading, formattedError } = useLogin(
    () => {
      history.push('/')
    }
  )

  return (
    <LoginContainer>
      <Container>
        Login
        <Form
          handleSubmit={handleSubmit}
          loading={loading}
          error={formattedError}
          // fieldError={fieldError}
        >
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
      </Container>
    </LoginContainer>
  )
}

export default Login
