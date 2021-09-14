import { VerticalSpacing } from 'common/global/spacing'
import { UserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import Form from 'view/common/form'
import Modal from 'view/common/modal'
import { ModalTitle } from 'view/common/modal/index.styles'
import useUpdateUser from '../../hooks/useUpdateUser'

interface UpdateUserModalProps {
  data: UserDto
  close: any
  refetch?: any
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, fields, onChange, loading, error } = useUpdateUser(
    data,
    () => {
      refetch()
      close()
    }
  )
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Update User</ModalTitle>
      <VerticalSpacing />
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={errors.formErrors}
        fieldError={errors.fieldErrors}
      >
        <Form.Input
          name="name"
          label="Name"
          onChange={onChange('name')}
          value={fields.name}
        />
        <Form.Input
          name="email"
          label="Email"
          onChange={onChange('email')}
          value={fields.email}
        />
        <Form.Input
          name="role"
          label="Role"
          type="number"
          onChange={onChange('role')}
          value={fields.role}
        />
      </Form>
    </Modal>
  )
}

export default UpdateUserModal
