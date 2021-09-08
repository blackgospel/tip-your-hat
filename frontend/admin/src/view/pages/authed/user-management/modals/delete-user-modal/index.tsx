import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useDeleteUser from '../../hooks/useDeleteUser'

interface DeleteUserProps {
  close: any
  refetch?: any
}

const DeleteUser: React.FC<DeleteUserProps> = ({ close, refetch }) => {
  const { handleSubmit, loading, error } = useDeleteUser(() => {
    refetch()
    close()
  })
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Delete User</ModalTitle>
      <ModalText>Are you sure that you want to delete this user.</ModalText>
      <Button onClick={handleSubmit}>{!loading ? 'Delete' : 'Deleting'}</Button>
    </Modal>
  )
}

export default DeleteUser
