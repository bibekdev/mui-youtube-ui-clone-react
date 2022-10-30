import { MouseEvent, useMemo, useState } from 'react'

const useToggle = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open: boolean = Boolean(anchorEl)
  const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return {
    anchorEl,
    open,
    handleClose,
    handleOpen,
  }
}

export default useToggle
