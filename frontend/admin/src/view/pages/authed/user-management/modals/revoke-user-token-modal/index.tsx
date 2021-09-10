import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { UserDto } from 'generated/graphql'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRevokeUserToken from '../../hooks/useRevokeUserToken'

interface RevokeUserTokenModalProps {
  data: UserDto
  close: () => void
  refetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<unknown>>
}

const RevokeUserTokenModal: React.FC<RevokeUserTokenModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, loading } = useRevokeUserToken(data, () => {
    refetch()
    close()
  })

  return (
    <Modal close={close}>
      <ModalTitle>Revoke User</ModalTitle>
      <ModalText>
        Are you sure that you want to revoke this users token: {data.name}.
      </ModalText>
      <Button onClick={handleSubmit}>{!loading ? 'Revoke' : 'Revoking'}</Button>
    </Modal>
  )
}

export default RevokeUserTokenModal
