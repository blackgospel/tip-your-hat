import { UserDto, useRestoreUserMutation } from 'generated/graphql'

const useRestoreUser = (data: UserDto, onSuccess?: () => void) => {
  const [restoreUser, { loading, error }] = useRestoreUserMutation({
    variables: {
      restoreUserOptions: {
        id: data.id,
      },
    },
  })

  const handleSubmit = async () => {
    await restoreUser()

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
