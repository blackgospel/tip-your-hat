import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import Form from 'view/common/form'
import Modal from 'view/common/modal'
import { ModalTitle } from 'view/common/modal/index.styles'
import useCreateUser from '../../hooks/useCreateUser'

interface UpdateUserModalProps {
  data?: any
  close: any
  refetch?: any
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  close,
  refetch,
}) => {
  const { handleSubmit, fields, onChange, loading, error } = useCreateUser(
    () => {
      refetch()
      close()
    }
  )
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Update User</ModalTitle>
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={errors.formErrors}
        fieldError={errors.fieldErrors}
      >
        <Form.Input
          name="name"
          placeholder="Name"
          onChange={onChange('name')}
          value={fields.name}
        />
        <Form.Input
          name="email"
          placeholder="Email"
          onChange={onChange('email')}
          value={fields.email}
        />
        <Form.Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange('password')}
          value={fields.password}
        />
        <Form.Input
          name="role"
          placeholder="Role"
          type="number"
          onChange={onChange('role')}
          value={fields.role}
          min={0}
          max={2}
        />
      </Form>
    </Modal>
  )
}

export default UpdateUserModal
