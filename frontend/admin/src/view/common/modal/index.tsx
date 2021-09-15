import Clear from '@material-ui/icons/Clear'
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, CloseButton, Container } from './index.styles'

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
          <Clear />
        </CloseButton>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('root-modal') as HTMLElement
  )
}

export default Modal
