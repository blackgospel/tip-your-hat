import { FullUserDto, useUpdateUserMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useUpdateUser = (data: FullUserDto, onSuccess?: () => void) => {
  const { fields, onChange, resetFields } = useFormField({
    email: data.email,
    name: data.name,
    role: data.role,
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

  const handleSubmit = async () => {
    await updateUser()

    resetFields()

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

export default useUpdateUser
