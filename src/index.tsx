import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
