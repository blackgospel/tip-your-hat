import { TIPS_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { TipsDto, useRestoreUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'

const useRestoreUser = (
  data: TipsDto,
  onSuccess?: () => void,
  toast = true
) => {
  const [restoreUser, { loading, error }] = useRestoreUserMutation({
    variables: {
      restoreUserOptions: {
        id: data.id,
      },
    },
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

  const handleSubmit = async () => {
    await restoreUser()

    if (toast) {
      enqueueCustomSnackbar(
        TIPS_MANAGEMENT_SNACKBAR_MESSAGES.RESTORE_TIPS,
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

export default useRestoreUser
