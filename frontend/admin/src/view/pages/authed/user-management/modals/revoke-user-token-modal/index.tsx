import { UserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRevokeUserToken from '../../hooks/useRevokeUserToken'

interface RevokeUserTokenModalProps {
  data: UserDto
  close: any
  refetch?: any
}

const RevokeUserTokenModal: React.FC<RevokeUserTokenModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, loading, error } = useRevokeUserToken(data, () => {
    refetch()
    close()
  })
  const { errors } = useErrors(error)

  return (
    <Modal close={close}>
      <ModalTitle>Revoke User</ModalTitle>
      <ModalText>
        Are you sure that you want to revoke this user's token: {data.name}.
      </ModalText>
      <Button onClick={handleSubmit}>{!loading ? 'Revoke' : 'Revoking'}</Button>
    </Modal>
  )
}

export default RevokeUserTokenModal
