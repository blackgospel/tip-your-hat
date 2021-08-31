import React from 'react'
import Form from 'view/common/form'
import Modal from 'view/common/modal'
import { ModalTitle } from 'view/common/modal/index.styles'
import useCreateUser from '../../hooks/useCreateUser'

interface CreateUserModalProps {
  data?: any
  close: any
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ close }) => {
  const { handleSubmit, fields, onChange, loading, formattedError } =
    useCreateUser(() => close())

  return (
    <Modal close={close}>
      <ModalTitle>Create User</ModalTitle>
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        error={formattedError}
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
      </Form>
    </Modal>
  )
}

export default CreateUserModal
