import { useRestoreUserMutation } from 'generated/graphql'

const useRestoreUser = (onSuccess = () => {}) => {
  const [deleteUser, { loading, error }] = useRestoreUserMutation({
    variables: {
      restoreUserOptions: {
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

export default useRestoreUser
