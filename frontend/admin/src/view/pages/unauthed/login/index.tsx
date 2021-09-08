import useErrors from 'helpers/hooks/useErrors'
import Form from 'view/common/form'
import { Container } from 'view/common/global'
import useLogin from './hooks/useLogin'
import { LoginContainer } from './index.styles'

const Login: React.FC = () => {
  const { handleSubmit, fields, onChange, loading, error } = useLogin()
  const { errors } = useErrors(error)

  return (
    <LoginContainer>
      <Container>
        Login
        <Form
          handleSubmit={handleSubmit}
          loading={loading}
          error={errors.formErrors}
          fieldError={errors.fieldErrors}
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
