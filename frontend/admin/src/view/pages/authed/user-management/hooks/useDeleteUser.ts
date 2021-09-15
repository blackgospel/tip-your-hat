import { USER_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { FullUserDto, useDeleteUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'

const useDeleteUser = (
  data: FullUserDto,
  onSuccess?: () => void,
  toast = true
) => {
  const [deleteUser, { loading, error }] = useDeleteUserMutation({
    variables: {
      deleteUserOptions: {
        id: data.id,
      },
    },
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

  const handleSubmit = async () => {
    await deleteUser()

    if (toast) {
      enqueueCustomSnackbar(
        USER_MANAGEMENT_SNACKBAR_MESSAGES.DELETE_USER,
        'success'
      )
    }

    if (onSuccess) {
      onSuccess()
    }
  }

  return {
    handleSubmit,
    loading,
    error,
  }
}

export default useDeleteUser
