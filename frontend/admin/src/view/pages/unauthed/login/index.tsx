import Copyright from 'common/copyright'
import { VerticalSpacing } from 'common/global/spacing'
import useErrors from 'helpers/hooks/useErrors'
import Form from 'view/common/form'
import { PageContainer } from 'view/common/global/page-container'
import Logo from 'view/common/logo'
import useLogin from './hooks/useLogin'
import { LoginContainer, LoginDescription, LoginTitle } from './index.styles'

const Login: React.FC = () => {
  const { handleSubmit, fields, onChange, loading, error } = useLogin()
  const { errors } = useErrors(error)

  return (
    <PageContainer center>
      <LoginContainer>
        <Logo />
        <VerticalSpacing />
        <LoginTitle variant="h4">Sign in to Tip Your Hat Admin</LoginTitle>
        <VerticalSpacing />
        <LoginDescription>
          This is a admin dashboard to perform adminstration services on the Tip
          Your Hat application.
        </LoginDescription>
        <VerticalSpacing />
        <Form
          handleSubmit={handleSubmit}
          loading={loading}
          error={errors.formErrors}
          fieldError={errors.fieldErrors}
        >
          <Form.Input
            required
            name="email"
            label="Email"
            onChange={onChange('email')}
            value={fields.email}
          />
          <Form.Input
            required
            name="password"
            label="Password"
            type="password"
            onChange={onChange('password')}
            value={fields.password}
          />
        </Form>
        <VerticalSpacing />
        <Copyright />
      </LoginContainer>
    </PageContainer>
  )
}

export default Login
