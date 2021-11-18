import queryString from 'query-string'
import { useMemo } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'

const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    return {
      navigate: navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
        ...searchParams,
      },

      location,
      history,
    }
  }, [params, searchParams, location, history])
}

export default useRouter
