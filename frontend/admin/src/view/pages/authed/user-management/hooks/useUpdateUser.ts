import { UserDto, useUpdateUserMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useUpdateUser = (data: UserDto, onSuccess = () => {}) => {
  const { fields, onChange, resetFields } = useFormField({
    email: data.email,
    name: data.name,
    role: 0,
  })

  const [updateUser, { loading, error }] = useUpdateUserMutation({
    variables: {
      updateUserOptions: {
        id: data.id,
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
