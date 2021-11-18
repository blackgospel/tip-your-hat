import { SetStateAction, useState } from 'react'
import { Box, TextInput } from 'view/atomic'
import { DashboardSearchModalContainer } from './index.styles'

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

const DashboardSearchModal = ({ open, onClose }: SearchModalProps) => {
  const [text, setText] = useState('')
  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setText(event.target.value)

  return (
    <DashboardSearchModalContainer {...{ open, onClose }}>
      <Box smallPadding>
        <TextInput
          value={text}
          placeholder="Search"
          onChange={handleChange}
          fullWidth
        />
      </Box>
    </DashboardSearchModalContainer>
  )
}

export default DashboardSearchModal
