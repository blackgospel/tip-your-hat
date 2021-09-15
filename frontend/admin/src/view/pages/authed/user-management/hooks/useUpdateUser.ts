import { USER_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { FullUserDto, useUpdateUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'
import useFormField from 'helpers/hooks/useFormField'

const useUpdateUser = (
  data: FullUserDto,
  onSuccess?: () => void,
  toast = true
) => {
  const { fields, onChange, resetFields } = useFormField({
    email: data.email,
    name: data.name,
    role: data.role,
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

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

    if (toast) {
      enqueueCustomSnackbar(
        USER_MANAGEMENT_SNACKBAR_MESSAGES.UPDATE_USER,
        'success'
      )
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

export default useUpdateUser
