
import { Avatar, Box, Flex, Grid, HStack, theme } from '@chakra-ui/react'
import './App.css'
import { AppScrollArea } from './components/scrollArea/AppScrollArea'
import NavigationSidebar from './components/NavigationSidebar/NavigationSidebar'
import channelsMock from './data/mocks/channelsMock'
import ChatContainer from './components/chat/chat-container'
import { ChannelContext } from './contexts/channel/channel-context'
import React from 'react'



function App() {
  const [context, dispatch] = React.useContext(ChannelContext)
  return (
    <Flex
      h="100vh"
      minWidth={"100vw"}
      w="100vw"
      background={theme.colors.gray[800]}
      color={theme.colors.white}
    >
      <HStack
        alignItems={"start"}
        minWidth={"100%"}
        gap={0}
        spacing={0}
      >
        <NavigationSidebar channels={channelsMock} />
        <ChatContainer />
      </HStack>
    </Flex>
  )
}

export default App
