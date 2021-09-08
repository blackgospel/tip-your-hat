import { useState } from 'react'

interface ModalHookProps {
  show: boolean
  data?: any
}

const useModal = () => {
  const [modal, setModal] = useState<ModalHookProps>({
    show: false,
    data: null,
  })

  const handleModal = (show: boolean, data?: any) => {
    setModal({ ...modal, show, data })
  }

  const showModal = (data?: any) => {
    handleModal(true, data)
  }

  const closeModal = () => {
    handleModal(false)
  }

  return [modal.show, modal.data, showModal, closeModal]
}

export default useModal
