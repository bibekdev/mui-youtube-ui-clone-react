import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import { sideListItems } from '../../data'

interface Props {
  isOpen: boolean
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {
  const sidebarWidth = isOpen ? '70px' : '250px'

  return (
    <Box
      component='div'
      sx={{
        flexBasis: sidebarWidth,
        flexGrow: 0,
        flexShrink: 0,
        overflowY: 'auto',
      }}>
      <Box
        sx={{
          width: '100%',
          bgColor: 'backgound.paper',
          borderRight: '1px solid #ddd',
        }}>
        {sideListItems.map(item => (
          <React.Fragment key={item.id}>
            {item.subdivision ? (
              <>
                <Divider />
                <Box sx={{ ml: 2, mt: 2 }}>
                  <Typography
                    sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                    variant='button'
                    display='block'
                    gutterBottom>
                    {item.text}
                  </Typography>
                </Box>
              </>
            ) : item.divider ? (
              <Divider />
            ) : (
              <nav aria-label='side-list-items'>
                <List sx={{ p: 0 }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
