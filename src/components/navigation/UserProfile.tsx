import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
  Link,
  ListItemAvatar,
  Avatar,
  List,
} from '@mui/material'
import { FaUserCircle } from 'react-icons/fa'
import { userProfileItems } from '../../data'
import useToggle from '../../hooks/useToggle'

const UserProfile: React.FC = () => {
  const { anchorEl, open, handleClose, handleOpen } = useToggle()
  return (
    <Box sx={{ px: 1 }}>
      <IconButton id='basic-profile-button' onClick={handleOpen}>
        <FaUserCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-profile-button',
        }}
        onClose={handleClose}>
        <ListItem sx={{ pt: 0, pb: 1 }} alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Channel Avatar' />
          </ListItemAvatar>
          <ListItemText
            primary='Bibekdev'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline', fontSize: 12 }}
                  component='span'>
                  <Link href='#' underline='none'>
                    Manage your Google Account
                  </Link>
                </Typography>
              </>
            }></ListItemText>
        </ListItem>
        <Box sx={{ minWidth: 300, borderTop: '1px solid #ddd' }}>
          {userProfileItems.map(item => (
            <List sx={{ p: 0 }} key={item.id}>
              {item.divider ? (
                <Divider />
              ) : (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          ))}
        </Box>
      </Menu>
    </Box>
  )
}

export default UserProfile
