import { FullUserDto, useRevokeUserTokenMutation } from 'generated/graphql'

const useRevokeUserToken = (data: FullUserDto, onSuccess?: () => void) => {
  const [revokeUserToken, { loading, error }] = useRevokeUserTokenMutation({
    variables: {
      revokeUserTokenOptions: {
        id: data.id,
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await revokeUserToken()

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
