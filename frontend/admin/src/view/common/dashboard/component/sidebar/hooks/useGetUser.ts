import { useGetUserQuery } from 'generated/graphql'

const useGetUser = (id?: string) => {
  const { data, loading, error } = useGetUserQuery({
    variables: {
      getUserOptions: {
        id: id || '',
      },
    },
  })

  return {
    data,
    loading,
    error,
  }
}

export default useGetUser
