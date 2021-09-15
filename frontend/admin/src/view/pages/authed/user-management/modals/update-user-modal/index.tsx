import { VerticalSpacing } from 'common/global/spacing'
import { AUTH_ROLES } from 'constants/auth'
import { FullUserDto } from 'generated/graphql'
import toTitleCase from 'helpers/generic/toTitleCase'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import Form from 'view/common/form'
import Modal from 'view/common/modal'
import { ModalTitle } from 'view/common/modal/index.styles'
import useUpdateUser from '../../hooks/useUpdateUser'

interface UpdateUserModalProps {
  data: FullUserDto
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

  console.log('fields,', fields)

  return (
    <Modal open close={close}>
      <Modal.Wrapper>
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
      </Modal.Wrapper>
    </Modal>
  )
}

export default UpdateUserModal
