import { createTheme } from '@mui/material'
import { grey, pink } from '@mui/material/colors'

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
})
