import { useRegisterMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useCreateUser = (onSuccess = () => {}) => {
  const { fields, onChange, resetFields } = useFormField({
    email: '',
    password: '',
    name: '',
    role: 0,
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

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await register()

    resetFields()
    onSuccess()
  }

  return {
    handleSubmit,
    onChange,
    fields,
    loading,
    error,
  }
}

export default useCreateUser
