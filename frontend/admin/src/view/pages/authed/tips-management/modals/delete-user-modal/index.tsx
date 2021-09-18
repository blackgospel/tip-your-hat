import { VerticalSpacing } from 'common/global/spacing'
import { TipsDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useDeleteTip from '../../hooks/useDeleteTip'

interface DeleteTipModalProps {
  data: TipsDto
  close: any
  refetch?: any
}

const DeleteTipModal: React.FC<DeleteTipModalProps> = ({
  data,
  close,
  refetch,
}) => {
  const { handleSubmit, loading, error } = useDeleteTip(data, () => {
    refetch()
    close()
  })

  useErrors(error)

  return (
    <Modal open close={close}>
      <Modal.Wrapper>
        <ModalTitle>Delete Tip</ModalTitle>
        <VerticalSpacing />
        <ModalText>
          Are you sure that you want to delete: {data.matchInfo.team1} vs{' '}
          {data.matchInfo.team2} tip.
        </ModalText>
        <VerticalSpacing />
        <Button onClick={handleSubmit}>
          {!loading ? 'Delete' : 'Deleting'}
        </Button>
      </Modal.Wrapper>
    </Modal>
  )
}

export default DeleteTipModal
