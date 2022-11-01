import Navbar from './components/navigation/Navbar'
import { Box } from '@mui/material'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react'
import TabList from './components/tab-list/TabList'
import CardList from './components/card/CardList'

const App = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const sidebarWidth = mobileOpen ? '70px' : '250px'
  const handleDrawerToggle = () => {
    setMobileOpen(open => !open)
  }
  return (
    <Box display='flex' height='100vh' sx={{ overflow: 'hidden' }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component='main'
        display='flex'
        sx={{ mt: 8, width: '100vw', overflow: 'hidden' }}>
        <Sidebar isOpen={mobileOpen} sidebarWidth={sidebarWidth} />
        <Box
          component='div'
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ my: 2, width: `calc(100vw-${sidebarWidth})` }}>
            <TabList />
          </Box>
          <Box
            component='div'
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              width: `calc(100vw - ${sidebarWidth})`,
            }}>
            <CardList />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
