import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from './styles/global.js'

// theme
import { ThemeProvider } from 'styled-components'
import {theme} from './styles/theme.js'

import { Provider } from 'react-redux'
import store from './store/'

import { ChakraProvider } from '@chakra-ui/react'
import { themeChakra } from './styles/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}> {/*redux*/}
      <ChakraProvider resetCSS={false} theme={themeChakra}>
        <ThemeProvider theme={theme}> {/*tema*/}
          <GlobalStyle /> {/*estilos globais*/}

            <App />

        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  
)
