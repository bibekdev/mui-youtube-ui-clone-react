import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
} from '@mui/material'
import useToggle from '../../hooks/useToggle'
import { BsBellFill } from 'react-icons/bs'
import { notificationData } from '../../data'

const NotificationList = () => {
  const { anchorEl, open, handleOpen, handleClose } = useToggle()
  return (
    <Box sx={{ px: 1 }}>
      <IconButton id='basic-notification-button' onClick={handleOpen}>
        <BsBellFill size={24} />
      </IconButton>
      <Menu
        id='basic-notification-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-notification-button',
        }}>
        <List sx={{ width: '100%', maxWidth: 360, pb: 0 }}>
          {notificationData.map(item => (
            <Link href={item.url} key={item.id} underline='none'>
              <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt={item.alt} src={item.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.text}
                  secondary={
                    <>
                      <Box component='span' sx={{ mt: 2 }}>
                        <Typography
                          sx={{ display: 'inline', fontSize: 12 }}
                          component='span'>
                          {item.time}
                        </Typography>
                      </Box>
                    </>
                  }></ListItemText>
              </ListItem>
              {notificationData.length !== item.id ? (
                <Divider variant='inset' component='li' />
              ) : null}
            </Link>
          ))}
        </List>
      </Menu>
    </Box>
  )
}

export default NotificationList
