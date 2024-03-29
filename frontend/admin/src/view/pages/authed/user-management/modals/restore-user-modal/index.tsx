import { VerticalSpacing } from 'common/global/spacing'
import { FullUserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRestoreUser from '../../hooks/useRestoreUser'

interface RestoreUserModalProps {
  data: FullUserDto
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

  useErrors(error)

  return (
    <Modal open close={close}>
      <Modal.Wrapper>
        <ModalTitle>Restore User</ModalTitle>
        <VerticalSpacing />
        <ModalText>Are you sure that you want to restore this user.</ModalText>
        <VerticalSpacing />
        <Button onClick={handleSubmit}>
          {!loading ? 'Restore' : 'Restoring'}
        </Button>
      </Modal.Wrapper>
    </Modal>
  )
}

export default RestoreUserModal
