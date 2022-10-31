import Navbar from './components/navigation/Navbar'
import { Box } from '@mui/material'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react'

const App = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
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
        <Sidebar isOpen={mobileOpen} />
      </Box>
    </Box>
  )
}

export default App
