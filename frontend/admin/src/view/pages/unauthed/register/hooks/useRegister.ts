import { useRegisterMutation } from 'generated/graphql'
import formatError from 'helpers/generic/formatError'
import { useEffect, useState } from 'react'
import useFormField from 'helpers/hooks/useFormField'

const useRegister = (onSuccess = () => {}) => {
  const [formattedError, setFormattedError] = useState<any>()
  const { fields, onChange } = useFormField({
    email: '',
    password: '',
    name: '',
  })
  const [register, { loading, error }] = useRegisterMutation({
    variables: {
      registerOptions: {
        email: fields.email,
        password: fields.password,
        name: fields.name,
      },
    },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await register()

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

export default useRegister
