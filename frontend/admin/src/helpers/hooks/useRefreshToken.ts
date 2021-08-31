import { ACCESS_TOKEN_KEY } from 'constants/auth'
import { useRefreshAccessTokenMutation } from 'generated/graphql'
import { useEffect, useState } from 'react'

const useRefreshToken = () => {
  const [loading, setLoading] = useState(true)
  const [refreshToken] = useRefreshAccessTokenMutation()

  useEffect(() => {
    refreshToken().then((res) => {
      if (res.data?.refreshToken.accessToken) {
        localStorage.setItem(
          ACCESS_TOKEN_KEY,
          res.data.refreshToken.accessToken
        )
      }
      setLoading(false)
    })
  }, [])

  return {
    loading,
  }
}

export default useRefreshToken
