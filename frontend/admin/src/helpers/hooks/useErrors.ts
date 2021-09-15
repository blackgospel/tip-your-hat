import { ApolloError } from '@apollo/client'
import arrToObj from 'helpers/generic/arrToObj'
import formatError from 'helpers/generic/formatError'
import { useCallback, useEffect, useState } from 'react'
import useCustomSnackbar from './useCustomSnackbar'

interface UseErrorState {
  formErrors?: any
  fieldErrors?: any
  generalErrors?: any
}

interface ClientErrors {
  type: 'form' | 'field' | 'general'
  fieldErrors?: Record<string, string>[]
  formErrors?: string[]
  generalErrors?: string[]
}

const useErrors = (error?: ApolloError) => {
  const [errors, setErrors] = useState<UseErrorState>({
    formErrors: null,
    fieldErrors: null,
    generalErrors: null,
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

  const resetErrors = () => {
    setErrors({
      formErrors: null,
      fieldErrors: null,
      generalErrors: null,
    })
  }

  const setFormErrors = (error: any) => {
    setErrors({
      ...errors,
      formErrors: error,
    })
  }

  const setFieldErrors = (error: any) => {
    setErrors({
      ...errors,
      fieldErrors: error,
    })
  }

  const setGeneralErrors = (error: any) => {
    setErrors({
      ...errors,
      generalErrors: error,
    })
  }

  const setAPIErrors = useCallback(() => {
    if (!error) return

    const { type, formattedError } = formatError(error)

    if (type === 'error') {
      enqueueCustomSnackbar(formattedError[0][0].message, 'error')
      setFormErrors(formattedError)
    } else {
      setFieldErrors(formattedError)
    }
  }, [error, errors])

  const setClientErrors = useCallback((error: ClientErrors) => {
    if (!error) return

    if (error.type === 'general' && error.generalErrors) {
      setGeneralErrors(error.generalErrors)
    }

    if (error.type === 'form' && error.formErrors) {
      setFormErrors(error.formErrors)
    }

    if (error.type === 'field' && error.fieldErrors) {
      setFieldErrors(arrToObj(error.fieldErrors, error.type))
    }
  }, [])

  useEffect(() => {
    if (error) {
      setAPIErrors()
    } else {
      resetErrors()
    }
  }, [error])

  return { errors, setClientErrors }
}

export default useErrors
