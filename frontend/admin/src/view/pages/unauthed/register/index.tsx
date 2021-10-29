import Copyright from 'common/copyright'
import { VerticalSpacing } from 'common/global/spacing'
import Typography from 'common/typography'
import useErrors from 'helpers/hooks/useErrors'
import Form from 'view/common/form'
import { PageContainer } from 'view/common/global/page-container'
import useRegister from './hooks/useRegister'
import { RegisterContainer } from './index.styles'

const Register: React.FC = () => {
  const { handleSubmit, fields, onChange, loading, error } = useRegister()
  const { errors } = useErrors(error)

  return (
    <PageContainer center>
      <RegisterContainer>
        <Typography tag="h1">Sign up for Tip Your Hat Admin</Typography>
        <VerticalSpacing spacing={3} />
        <Form
          handleSubmit={handleSubmit}
          loading={loading}
          error={errors.formErrors}
          fieldError={errors.fieldErrors}
        >
          <Form.Input
            required
            name="name"
            label="Name"
            onChange={onChange('name')}
            value={fields.name}
          />
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
      </RegisterContainer>
    </PageContainer>
  )
}

export default Register
