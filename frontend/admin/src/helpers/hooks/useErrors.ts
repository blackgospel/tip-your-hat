import { ApolloError } from '@apollo/client'
import formatError from 'helpers/generic/formatError'
import { useCallback, useEffect, useState } from 'react'

const useErrors = (error?: ApolloError) => {
  const [errors, setErrors] = useState({
    formErrors: null,
    fieldErrors: null,
  })

  const resetErrors = () => {
    setErrors({
      formErrors: null,
      fieldErrors: null,
    })
  }

  const setAPIErrors = useCallback(() => {
    if (!error) return

    const { type, formattedError } = formatError(error)

    if (type === 'error') {
      setErrors({
        ...errors,
        formErrors: formattedError,
      })
    } else {
      setErrors({
        ...errors,
        fieldErrors: formattedError,
      })
    }
  }, [error, errors])

  useEffect(() => {
    if (error) {
      setAPIErrors()
    } else {
      resetErrors()
    }
  }, [error])

  return { errors }
}

export default useErrors
