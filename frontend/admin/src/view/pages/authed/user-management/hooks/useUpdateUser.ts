import { useUpdateUserMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useUpdateUser = (onSuccess = () => {}) => {
  const { fields, onChange, resetFields } = useFormField({
    email: '',
    password: '',
    name: '',
    role: 0,
  })

  const [updateUser, { loading, error }] = useUpdateUserMutation({
    variables: {
      updateUserOptions: {
        id: 'dsfsdfs',
        email: fields.email,
        name: fields.name,
        role: fields.role,
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await updateUser()

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

export default useUpdateUser
