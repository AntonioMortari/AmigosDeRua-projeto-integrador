import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from './styles/global.js'

// theme
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'

import { Provider } from 'react-redux'
import store from './store/'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  
)
