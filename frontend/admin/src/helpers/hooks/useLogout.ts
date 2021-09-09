import { ACCESS_TOKEN_KEY } from 'constants/auth'
import { useLoginMutation } from 'generated/graphql'
import useCurrentUserStore from 'zustands/stores/current-user'

const useLogout = () => {
  const [logout, { client }] = useLoginMutation()
  const { removeCurrentUser } = useCurrentUserStore()

  const handlelogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    client.resetStore()
    removeCurrentUser()
    logout()
  }

  return handlelogout
}

export default useLogout
