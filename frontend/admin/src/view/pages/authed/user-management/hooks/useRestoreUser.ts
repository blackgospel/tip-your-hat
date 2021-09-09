import { UserDto, useRestoreUserMutation } from 'generated/graphql'

const useRestoreUser = (data: UserDto, onSuccess = () => {}) => {
  const [restoreUser, { loading, error }] = useRestoreUserMutation({
    variables: {
      restoreUserOptions: {
        id: data.id,
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await restoreUser()
    onSuccess()
  }

  return {
    handleSubmit,
    loading,
    error,
  }
}

export default useRestoreUser
