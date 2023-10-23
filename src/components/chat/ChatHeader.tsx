//write the ChatHeader component here
import * as React from 'react';
import { Avatar, Box, Flex, Grid, theme, Text } from '@chakra-ui/react';



interface ChatHeaderProps {
  channel?: IChannel;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ channel }) => {
  return (
    <Flex
      w="100%"
      background={theme.colors.gray[900]}
      color={theme.colors.white}
    >
      <Grid
      >
        <Box
            boxShadow={""}
            height={"16"}
            bg = {theme.colors.gray[900]}
        >
            <ChatHeaderInfo user={channel?.users ? channel?.users[0] : undefined } />
        </Box>
      </Grid>
    </Flex>
  );
};

interface ChatHeaderInfoProps {
  user?: IUser;
}

const ChatHeaderInfo: React.FC<ChatHeaderInfoProps> = ({ user }) => {
  return (
    <Box
      display={"flex"}
      background={theme.colors.gray[900]}
      color={theme.colors.white}
      alignItems={"center"}
      gap={5}
      padding={1}
      marginLeft={5}
      boxShadow={"none"}
    >      
        <Avatar/>     
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={theme.colors.white}
        >test</Text>
    </Box>
  )
}