import { useCreateUserMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useCreateUser = (onSuccess = () => {}) => {
  const { fields, onChange, resetFields } = useFormField({
    email: '',
    password: '',
    name: '',
    role: 0,
  })

  const [createUser, { loading, error }] = useCreateUserMutation({
    variables: {
      createUserOptions: {
        email: fields.email,
        password: fields.password,
        name: fields.name,
        role: fields.role,
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await createUser()

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
