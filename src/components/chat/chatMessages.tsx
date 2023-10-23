import React from 'react';
import { AppScrollArea } from '../scrollArea/AppScrollArea';
import { Box, Flex, Text } from '@chakra-ui/react';



type ChatMessagesProps = {
  channel?: IChannel;
};

const ChatMessage: React.FC<ChatMessagesProps> = ({ channel }) => {
  return (
    <Flex
      h={"100%"}
    >
        <AppScrollArea/>
            <Box>{channel?.messages ? channel.messages.map((m)=>(
                <Box>
                    <Text

                    >{m.user?.username}</Text>
                    <Text
                    
                    >{m.content}</Text>
                    <Text>{m.createdAt.toISOString()}</Text>
                </Box>
            )) : ""}
            </Box>
        <AppScrollArea/>
    </Flex>
  );
};

export default ChatMessage;