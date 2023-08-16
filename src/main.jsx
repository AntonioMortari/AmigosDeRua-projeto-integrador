import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from './styles/global.js'

// theme
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  
)
