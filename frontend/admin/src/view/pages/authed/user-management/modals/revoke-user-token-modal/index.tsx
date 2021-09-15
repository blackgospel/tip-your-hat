import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { VerticalSpacing } from 'common/global/spacing'
import { FullUserDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRevokeUserToken from '../../hooks/useRevokeUserToken'

interface RevokeUserTokenModalProps {
  data: FullUserDto
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
  const { handleSubmit, loading, error } = useRevokeUserToken(data, () => {
    refetch()
    close()
  })

  useErrors(error)

  return (
    <Modal open close={close}>
      <Modal.Wrapper>
        <ModalTitle>Revoke User</ModalTitle>
        <VerticalSpacing />
        <ModalText>
          Are you sure that you want to revoke this users token: {data.name}.
        </ModalText>
        <VerticalSpacing />
        <Button onClick={handleSubmit}>
          {!loading ? 'Revoke' : 'Revoking'}
        </Button>
      </Modal.Wrapper>
    </Modal>
  )
}

export default RevokeUserTokenModal
