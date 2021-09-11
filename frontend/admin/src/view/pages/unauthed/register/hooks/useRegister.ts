import { useRegisterMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useRegister = (onSuccess?: () => void) => {
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
