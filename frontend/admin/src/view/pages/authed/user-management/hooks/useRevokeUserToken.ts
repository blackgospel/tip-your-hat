import { UserDto, useRevokeUserTokenMutation } from 'generated/graphql'

const useRevokeUserToken = (data: UserDto, onSuccess = () => {}) => {
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
    onSuccess()
  }

  return {
    handleSubmit,
    loading,
    error,
  }
}

export default useRevokeUserToken
