import { UserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRestoreUser from '../../hooks/useRestoreUser'

interface RestoreUserModalProps {
  data: UserDto
  close: any
  refetch?: any
}

const RestoreUserModal: React.FC<RestoreUserModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, loading, error } = useRestoreUser(data, () => {
    refetch()
    close()
  })
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Restore User</ModalTitle>
      <ModalText>Are you sure that you want to restore this user.</ModalText>
      <Button onClick={handleSubmit}>
        {!loading ? 'Restore' : 'Restoring'}
      </Button>
    </Modal>
  )
}

export default RestoreUserModal