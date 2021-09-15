import Chance from 'chance'
import { USER_MANAGEMENT_SNACKBAR_MESSAGES } from 'constants/enums'
import { useCreateUserMutation } from 'generated/graphql'
import useCustomSnackbar from 'helpers/hooks/useCustomSnackbar'
import useFormField from 'helpers/hooks/useFormField'

const useCreateUser = (onSuccess?: () => void, toast = true) => {
  const { fields, onChange, resetFields } = useFormField({
    email: '',
    password: '',
    name: '',
    role: 2,
  })

  const enqueueCustomSnackbar = useCustomSnackbar()

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

  const handleSubmit = async () => {
    await createUser()

    resetFields()

    if (toast) {
      enqueueCustomSnackbar(
        USER_MANAGEMENT_SNACKBAR_MESSAGES.CREATE_USER,
        'success'
      )
    }

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
