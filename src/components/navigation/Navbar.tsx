import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { AiFillYoutube } from 'react-icons/ai'
import NotificationList from './NotificationList'
import Searchbar from './Searchbar'
import Upload from './Upload'
import UserProfile from './UserProfile'

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ backgroundColor: 'white', color: '#000' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}>
          <Box display='flex' alignItems='center'>
            <IconButton color='inherit' aria-label='open-drawer' sx={{ mr: 1 }}>
              <Menu />
            </IconButton>
            <AiFillYoutube
              color='red'
              size={32}
              style={{ cursor: 'pointer' }}
            />
            <Typography
              component='div'
              variant='h6'
              sx={{
                fontSize: 22,
                fontFamily: 'Oswald',
                ml: 1,
                cursor: 'pointer',
              }}>
              Youtube
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Searchbar />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Upload />
            <NotificationList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
