import { useDeleteUserMutation, UserDto } from 'generated/graphql'

const useDeleteUser = (data: UserDto, onSuccess?: () => void) => {
  const [deleteUser, { loading, error }] = useDeleteUserMutation({
    variables: {
      deleteUserOptions: {
        id: data.id,
      },
    },
  })

  const handleSubmit = async () => {
    await deleteUser()

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
