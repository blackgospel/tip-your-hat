import useErrors from 'helpers/hooks/useErrors'
import Form from 'view/common/form'
import { PageContainer } from 'view/common/global/page-container'
import Logo from 'view/common/logo'
import useLogin from './hooks/useLogin'

const Login: React.FC = () => {
  const { handleSubmit, fields, onChange, loading, error } = useLogin()
  const { errors } = useErrors(error)

  return (
    <PageContainer>
      <Logo />
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
    </PageContainer>
  )
}

export default Login
