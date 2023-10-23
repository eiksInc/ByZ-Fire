// write the ChatContainer component here
import * as React from 'react';
import { Box, Flex, Grid, theme } from '@chakra-ui/react';
import { ChatHeader } from './ChatHeader';
import { ChannelContext } from '../../contexts/channel/channel-context';
import ChatMessages from './chatMessages';
import ChatInput from './chatInput';

interface ChatContainerProps {
  channel?: IChannel;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ channel }) => {
  const [context, dispatch] = React.useContext(ChannelContext);
  return (
    <Flex
      width={"100%"}
      h={"85%"}
    >
      <Grid minWidth={'100%'}>
        <Box minWidth={"100%"}>
          <ChatHeader />
          <ChatMessages channel={channel} />
          <ChatInput /> 
        </Box>
      </Grid>
    </Flex>
  );
};

export default ChatContainer;