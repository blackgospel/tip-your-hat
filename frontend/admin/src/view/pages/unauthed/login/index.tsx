import Copyright from 'common/copyright'
import { VerticalSpacing } from 'common/global/spacing'
import Typography from 'common/typography'
import Form from 'view/common/form'
import { PageContainer } from 'view/common/global/page-container'
import useLogin from './hooks/useLogin'
import { LoginContainer } from './index.styles'

const Login: React.FC = () => {
  const { handleSubmit, fields, onChange, loading, errors } = useLogin()

  return (
    <PageContainer center>
      <LoginContainer>
        <Typography tag="h1">Sign in to Tip Your Hat Admin</Typography>
        <VerticalSpacing spacing={3} />
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
