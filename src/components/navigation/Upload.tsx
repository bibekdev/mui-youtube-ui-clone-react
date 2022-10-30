import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { RiVideoUploadFill } from 'react-icons/ri'
import { uploadMenuItems } from '../../data'
import useToggle from '../../hooks/useToggle'

const Upload: React.FC = () => {
  const { anchorEl, open, handleClose, handleOpen } = useToggle()
  return (
    <Box sx={{ px: 1 }}>
      <IconButton id='basic-open-button' onClick={handleOpen}>
        <RiVideoUploadFill size={24} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-open-button',
        }}
        onClose={handleClose}>
        {uploadMenuItems.map(item => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.icon}
            <Typography sx={{ ml: 1 }} component='span'>
              {item.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Upload
