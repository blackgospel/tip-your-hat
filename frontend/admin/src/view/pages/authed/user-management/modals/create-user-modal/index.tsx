import { VerticalSpacing } from 'common/global/spacing'
import { AUTH_ROLES } from 'constants/auth'
import toTitleCase from 'helpers/generic/toTitleCase'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import Form from 'view/common/form'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalTitle } from 'view/common/modal/index.styles'
import useCreateUser from '../../hooks/useCreateUser'

interface CreateUserModalProps {
  data?: any
  close: any
  refetch?: any
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  close,
  refetch,
}) => {
  const { handleSubmit, onChange, fields, loading, error, randomUser } =
    useCreateUser(() => {
      refetch()
      close()
    })

  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Create User</ModalTitle>
      <Button onClick={randomUser}>Random User</Button>
      <VerticalSpacing />
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={errors.formErrors}
        fieldError={errors.fieldErrors}
      >
        <Form.Input
          required
          name="name"
          label="Name"
          onChange={onChange('name')}
          value={fields.name}
        />
        <Form.Input
          required
          name="email"
          label="Email"
          onChange={onChange('email')}
          value={fields.email}
        />
        <Form.Input
          required
          name="password"
          label="Password"
          type="password"
          onChange={onChange('password')}
          value={fields.password}
        />
        <Form.Select
          name="role"
          label="Role"
          onChange={(event) => onChange('role')(event)}
          options={Object.keys(AUTH_ROLES).map((item) => {
            return {
              label: toTitleCase(item),
              value: AUTH_ROLES[item as keyof typeof AUTH_ROLES],
            }
          })}
          value={fields.role}
        />
      </Form>
    </Modal>
  )
}

export default CreateUserModal
