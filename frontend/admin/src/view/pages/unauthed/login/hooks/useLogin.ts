import { ACCESS_TOKEN_KEY } from 'constants/auth'
import { useLoginMutation, UserDocument, UserQuery } from 'generated/graphql'
import formatError from 'helpers/generic/formatError'
import { useEffect, useState } from 'react'
import useFormField from 'helpers/hooks/useFormField'

const useLogin = (onSuccess = () => {}) => {
  const [formattedError, setFormattedError] = useState<any>()
  const { fields, onChange } = useFormField({
    email: '',
    password: '',
  })

  const [login, { loading, error }] = useLoginMutation({
    variables: {
      loginOptions: {
        email: fields.email,
        password: fields.password,
      },
    },
    update: (store, { data }) => {
      if (!data) {
        return null
      }

      store.writeQuery<UserQuery>({
        query: UserDocument,
        data: {
          getUser: data.login.user,
        },
      })
      return
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const response = await login()

    console.log('response', response)

    if (response && response.data) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.login.accessToken)
    }

    onSuccess()
  }

  useEffect(() => {
    if (error) {
      const { formattedError } = formatError(error)
      setFormattedError(formattedError)
    } else {
      setFormattedError(undefined)
    }
  }, [error])

  return {
    handleSubmit,
    onChange,
    fields,
    loading,
    formattedError,
  }
}

export default useLogin
