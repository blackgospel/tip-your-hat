import { Switch, SwitchProps as MuiSwitchProps } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { SliderContainer } from './index.styles'

interface SliderProps extends MuiSwitchProps {
  value: boolean
  onChange?: any
}

const Slider: React.FC<SliderProps> = ({ value, onChange, name }) => {
  const [active, setActive] = useState(value)

  useEffect(() => {
    setActive(value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  return (
    <SliderContainer>
      <Switch
        color="primary"
        checked={active}
        onChange={handleChange}
        name={name}
      />
    </SliderContainer>
  )
}

export default Slider
