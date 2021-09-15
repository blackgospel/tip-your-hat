import { VerticalSpacing } from 'common/global/spacing'
import { FullUserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useDeleteUser from '../../hooks/useDeleteUser'

interface DeleteUserModalProps {
  data: FullUserDto
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

  useErrors(error)

  return (
    <Modal open close={close}>
      <Modal.Wrapper>
        <ModalTitle>Delete User</ModalTitle>
        <VerticalSpacing />
        <ModalText>
          Are you sure that you want to delete: {data.name}.
        </ModalText>
        <VerticalSpacing />
        <Button onClick={handleSubmit}>
          {!loading ? 'Delete' : 'Deleting'}
        </Button>
      </Modal.Wrapper>
    </Modal>
  )
}

export default DeleteUserModal
