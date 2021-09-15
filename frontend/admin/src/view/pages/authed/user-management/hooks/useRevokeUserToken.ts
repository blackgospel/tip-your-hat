import { USER_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { FullUserDto, useRevokeUserTokenMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'

const useRevokeUserToken = (
  data: FullUserDto,
  onSuccess?: () => void,
  toast = true
) => {
  const [revokeUserToken, { loading, error }] = useRevokeUserTokenMutation({
    variables: {
      revokeUserTokenOptions: {
        id: data.id,
      },
    },
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await revokeUserToken()

    if (toast) {
      enqueueCustomSnackbar(
        USER_MANAGEMENT_SNACKBAR_MESSAGES.REVOKE_USER,
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

export default useRevokeUserToken
