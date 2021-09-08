import { useDeleteUserMutation } from 'generated/graphql'

const useDeleteUser = (onSuccess = () => {}) => {
  const [deleteUser, { loading, error }] = useDeleteUserMutation({
    variables: {
      deleteUserOptions: {
        id: 'dsfsdfs',
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await deleteUser()
    onSuccess()
  }

  return {
    handleSubmit,
    loading,
    error,
  }
}

export default useDeleteUser
