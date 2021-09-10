import Chance from 'chance'
import { useCreateUserMutation } from 'generated/graphql'
import useFormField from 'helpers/hooks/useFormField'

const useCreateUser = (onSuccess?: () => void) => {
  const { fields, onChange, resetFields } = useFormField({
    email: '',
    password: '',
    name: '',
    role: 0,
  })

  const [createUser, { loading, error }] = useCreateUserMutation({
    variables: {
      createUserOptions: {
        email: fields.email,
        password: fields.password,
        name: fields.name,
        role: +fields.role,
      },
    },
  })

  const randomUser = (event: any) => {
    onChange('email')(event, Chance().email())
    onChange('name')(event, Chance().name())
    onChange('password')(event, 'test')
    onChange('role')(event, 2)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await createUser()

    resetFields()

    if (onSuccess) {
      onSuccess()
    }
  }

  return {
    handleSubmit,
    onChange,
    randomUser,
    fields,
    loading,
    error,
  }
}

export default useCreateUser
