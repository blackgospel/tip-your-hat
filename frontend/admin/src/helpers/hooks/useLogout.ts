import { ACCESS_TOKEN_KEY } from 'constants/auth'
import { useLoginMutation } from 'generated/graphql'
import useCurrentUserStore from 'zustands/stores/current-user'

const useLogout = () => {
  const [logout] = useLoginMutation()
  const { removeCurrentUser } = useCurrentUserStore()

  const handlelogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    removeCurrentUser()
    logout()
  }

  return handlelogout
}

export default useLogout
