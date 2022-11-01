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
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: '#eee',
          borderRadius: 30,
          marginRight: '10px',
          marginTop: '10px',
          minHeight: '20px',
          minWidth: '60px',
          transition: 'all .2s ease-in',
          ':active': {
            backgroundColor: 'black',
            color: 'white',
          },
          ':focus': {
            backgroundColor: 'black',
            color: 'white',
          },
          ':selected': {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      },
    },
  },
})
