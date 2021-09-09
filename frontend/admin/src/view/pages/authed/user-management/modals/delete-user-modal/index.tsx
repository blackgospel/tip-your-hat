import { UserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useDeleteUser from '../../hooks/useDeleteUser'

interface DeleteUserModalProps {
  data: UserDto
  close: any
  refetch?: any
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, loading, error } = useDeleteUser(data, () => {
    refetch()
    close()
  })
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Delete User</ModalTitle>
      <ModalText>Are you sure that you want to delete: {data.name}.</ModalText>
      <Button onClick={handleSubmit}>{!loading ? 'Delete' : 'Deleting'}</Button>
    </Modal>
  )
}

export default DeleteUserModal