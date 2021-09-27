import { IconButton, Menu, MenuItem } from '@mui/material'
import { Button } from 'common/global/button'
import { useState } from 'react'
import {
  DropdownContainer,
  DropdownMenuIcon,
  DropdownMenuText,
} from './index.styles'

interface DropdownProps {
  name?: string
  list: { name: string; icon?: any; onClick: any }[]
  Icon?: any
}

const Dropdown: React.FC<DropdownProps> = ({ name, list, Icon }) => {
  const [element, setElement] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null)
  const handleToggle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setElement(event.currentTarget)
  const handleClose = () => setElement(null)
  const handleMenuClick = (onClick: any) => {
    handleClose()
    onClick()
  }

  return (
    <DropdownContainer>
      {Icon ? (
        <IconButton onClick={handleToggle}>
          <Icon color="primary" />
        </IconButton>
      ) : (
        <Button onClick={handleToggle}>{name}</Button>
      )}
      <Menu
        id="menu"
        anchorEl={element}
        keepMounted
        open={Boolean(element)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {list.map(({ name, icon, onClick }, index) => {
          return (
            <MenuItem key={index} onClick={() => handleMenuClick(onClick)}>
              <DropdownMenuIcon>{icon}</DropdownMenuIcon>
              <DropdownMenuText>{name}</DropdownMenuText>
            </MenuItem>
          )
        })}
      </Menu>
    </DropdownContainer>
  )
}

export default Dropdown
