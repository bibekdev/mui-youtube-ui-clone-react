import { Menu, MenuItem } from '@mui/material'
import React from 'react'

interface Props {
  MenuListProps: { 'aria-labelledby': string }
  handleOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleClose: () => void
  anchorEl: HTMLElement | null
  open: boolean
  children: React.ReactNode
}

const CustomMenu: React.FC<Props> = ({
  MenuListProps,
  handleClose,
  handleOpen,
  anchorEl,
  open,
  children,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={MenuListProps}>
      {children}
    </Menu>
  )
}

export default CustomMenu
