import { useLoginAdminMutation } from 'generated/graphql'
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
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
    error,
  }
}

export default useLogin
