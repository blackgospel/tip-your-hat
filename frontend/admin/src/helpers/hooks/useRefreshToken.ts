import { useRefreshAccessTokenMutation } from 'generated/graphql'
import { useEffect, useState } from 'react'
import useCurrentUserStore from 'zustands/stores/current-user'

const useRefreshToken = () => {
  const [loading, setLoading] = useState(true)
  const [refreshToken] = useRefreshAccessTokenMutation()
  const { setCurrentUser } = useCurrentUserStore()

  useEffect(() => {
    refreshToken()
      .then((res) => {
        if (res.data?.refreshToken.accessToken) {
          setCurrentUser(res.data.refreshToken.accessToken)
          setLoading(false)
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return {
    loading,
  }
}

export default useRefreshToken
