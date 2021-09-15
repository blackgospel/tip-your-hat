import { USER_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { FullUserDto, useRestoreUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'

const useRestoreUser = (
  data: FullUserDto,
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
        USER_MANAGEMENT_SNACKBAR_MESSAGES.RESTORE_USER,
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
