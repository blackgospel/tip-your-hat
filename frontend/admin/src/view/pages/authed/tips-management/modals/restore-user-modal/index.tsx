import { VerticalSpacing } from 'common/global/spacing'
import { TipsDto } from 'generated/graphql'
import useErrors from 'helpers/hooks/useErrors'
import React from 'react'
import { Button } from 'view/common/global/button'
import Modal from 'view/common/modal'
import { ModalText, ModalTitle } from 'view/common/modal/index.styles'
import useRestoreUser from '../../hooks/useRestoreTip'

interface RestoreTipModalProps {
  data: TipsDto
  close: any
  refetch?: any
}

const RestoreTipModal: React.FC<RestoreTipModalProps> = ({
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
        <ModalTitle>Restore Tip</ModalTitle>
        <VerticalSpacing />
        <ModalText>Are you sure that you want to restore this tip.</ModalText>
        <VerticalSpacing />
        <Button onClick={handleSubmit}>
          {!loading ? 'Restore' : 'Restoring'}
        </Button>
      </Modal.Wrapper>
    </Modal>
  )
}

export default RestoreTipModal
