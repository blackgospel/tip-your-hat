import { useLoginAdminMutation } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import useFormField from 'helpers/hooks/useFormField'
import useCurrentUserStore from 'zustands/stores/current-user'

const useLogin = (onSuccess?: () => void) => {
  const { setCurrentUser } = useCurrentUserStore()
  const { fields, onChange } = useFormField({
    email: '',
    password: '',
  })

  const [login, { loading, error }] = useLoginAdminMutation({
    variables: {
      loginAdminOptions: {
        email: fields.email,
        password: fields.password,
      },
    },
  })

  const { errors } = useErrors(error, false)

  const handleSubmit = async () => {
    const response = await login()

    if (response && response.data) {
      setCurrentUser(response.data.loginAdmin.accessToken)
    }

    if (onSuccess) {
      onSuccess()
    }
  }

  return {
    handleSubmit,
    onChange,
    fields,
    loading,
    errors,
  }
}

export default useLogin
