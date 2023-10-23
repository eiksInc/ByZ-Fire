import { Flex, Grid, Avatar, Box, Tooltip } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import "./navigationSidebar.css"
import { ChannelContext } from '../../contexts/channel/channel-context'

interface NavigationSidebarProps {
    channels?: IChannel[]
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ channels }) => {
    const [Achannel, setAChannel] = React.useState<IChannel | null>(null)
    const [context, dispatch] = React.useContext(ChannelContext)
    useEffect(() => {
        console.log(Achannel)
        dispatch('channel', { activeChannel: Achannel })
    }
        , [Achannel])
    return (
        <Flex
            h={"100%"}
            minW={24}
            backgroundColor={"black"}
            overflow={"hidden"}
            margin={0}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={5}
                paddingTop={10}
                alignItems={"start"}
                h={"100%"}
                minW={24}
                maxH={"100vh"}
                overflowY={"scroll"}
                overflowX={"hidden"}
                scrollBehavior={"smooth"}
                className='navigationSidebar'
            >
                <Box
                    display={"flex"}
                    gap={4}
                    alignItems={"center"}
                    minW={"16"}
                >
                    <Box
                        bg='transparent'
                        minW={2}
                        h={5}
                        borderRadius={"0 5px 5px 0"}

                    />
                    <Box
                        minH={"48px"}
                        minW={"48px"}
                        bg={"rgba(255,255,255,0.1)"}
                        borderRadius={"50%"}
                        className='channel-thumbnail'
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <AddIcon></AddIcon>
                    </Box>
                </Box>
                
                {channels ? channels.map((channel) => (
                    <SidebarItem key={channel.id} channel={channel} onclick={() => { setAChannel(context.channels.filter((n) => n.id === channel.id)[0]) }} />
                )) : <Avatar />}
            </Box>
        </Flex>
    )
}



type SidebarItemProps = {
    channel: IChannel
    active?: boolean
    onclick: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ channel, active, onclick }) => {
    const [context, dispatch] = React.useContext(ChannelContext)
    return (
        <Box onClick={() => { onclick() }}>
            <Tooltip label={channel.name} placement='right'>
                <Box className='channel-thumbnail'
                    display={"flex"}
                    gap={4}
                    alignItems={"center"}
                    minW={"16"}
                >
                    {context.activeChannel?.id === channel.id ? <Box
                        className='active-indicator'
                        bg='white'
                        minW={2}
                        h={10}
                        borderRadius={"0 5px 5px 0"}
                    /> : <Box
                        className='active-indicator'
                        bg='transparent'
                        minW={2}
                        h={5}
                        borderRadius={"0 5px 5px 0"}

                    />}
                    <Avatar name={channel.name} src={"..."} className='channel-thumbnail' />
                </Box>
            </Tooltip>
        </Box>
    )
}



export default NavigationSidebar