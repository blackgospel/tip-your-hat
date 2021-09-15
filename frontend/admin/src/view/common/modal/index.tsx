import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
} from '@material-ui/core'
import React, { FC } from 'react'
import { ModalContainer, ModalWrapper } from './index.styles'

interface ModalProps extends MuiModalProps {
  close: () => void
}

interface ModalSubComponents {
  Wrapper: FC
}

const Modal: React.FC<ModalProps> & ModalSubComponents = ({
  open,
  close,
  children,
}) => {
  return (
    <MuiModal open={open} onClose={close}>
      <ModalContainer>{children}</ModalContainer>
    </MuiModal>
  )
}

Modal.Wrapper = ModalWrapper

export default Modal
