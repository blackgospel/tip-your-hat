import { UNAUTHED_ROUTES } from 'constants/routes'
import { useRegisterMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'
import useRouter from 'helpers/hooks/useRouter'

const useRegister = (onSuccess?: () => void) => {
  const { push } = useRouter()

  const { fields, onChange } = useFormField({
    email: '',
    password: '',
    name: '',
  })

  const [register, { loading, error }] = useRegisterMutation({
    variables: {
      registerOptions: {
        email: fields.email,
        password: fields.password,
        name: fields.name,
      },
    },
  })

  const handleSubmit = async () => {
    await register()

    push(UNAUTHED_ROUTES.LOGIN)

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

export default useRegister
