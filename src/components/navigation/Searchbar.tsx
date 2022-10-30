import { Box, IconButton, InputBase, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { BsFillMicFill } from 'react-icons/bs'

const Searchbar: React.FC = () => {
  return (
    <Box display='flex' alignItems='center'>
      <Paper
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 400,
          boxShadow: 0,
          border: '1px solid #ccc',
          borderRadius: 5,
          overflow: 'hidden',
          mr: 1,
        }}>
        <InputBase sx={{ flex: 1, ml: 1, pl: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ background: '#eee', borderRadius: 0 }}>
          <Search />
        </IconButton>
      </Paper>
      <IconButton type='button' sx={{ ml: 1 }}>
        <BsFillMicFill size={18} />
      </IconButton>
    </Box>
  )
}

export default Searchbar
