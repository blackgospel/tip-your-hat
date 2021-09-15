import { FullUserDto, useDeleteUserMutation } from 'generated/graphql'

const useDeleteUser = (data: FullUserDto, onSuccess?: () => void) => {
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
