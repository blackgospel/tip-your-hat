import { useState } from 'react'

const useModal = () => {
  const [modal, setModal] = useState({
    show: false,
    data: [],
  })

  const handleModal = ({ state, data }: { state?: boolean; data?: any }) => {
    if (!state) {
      setModal({ ...modal, show: false, data: [] })
    } else {
      setModal({ ...modal, show: true, data })
    }
  }

  const showModal = (data?: any) => handleModal({ state: true, data })

  const closeModal = () => handleModal({ state: false })

  return [modal.show, modal.data, showModal, closeModal]
}

export default useModal
