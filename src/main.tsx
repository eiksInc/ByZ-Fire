import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ChannelContextProvider } from './contexts/channel/channel-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ChannelContextProvider>
        <App />
      </ChannelContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
