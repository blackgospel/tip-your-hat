import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { BiX } from 'react-icons/bi'
import { CloseButton, Backdrop, Container } from './index.styles'

interface ModalProps {
  close: () => void
}

const Modal: React.FC<ModalProps> = ({ close, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return createPortal(
    <Backdrop>
      <Container>
        <CloseButton onClick={close}>
          <BiX />
        </CloseButton>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('root-modal')!
  )
}

export default Modal
