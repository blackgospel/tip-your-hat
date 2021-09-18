import { TIPS_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { TipsDto, useDeleteUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'

const useDeleteTip = (data: TipsDto, onSuccess?: () => void, toast = true) => {
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
        TIPS_MANAGEMENT_SNACKBAR_MESSAGES.DELETE_TIPS,
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

export default useDeleteTip
