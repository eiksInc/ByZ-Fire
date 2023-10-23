import React, { ReactNode } from 'react'
import channelsMock from '../../data/mocks/channelsMock'


interface ChannelContextValue {
    channels: IChannel[]
    activeChannel: IChannel | null
    setActiveChannel: (channel: IChannel) => void
}

const initialContextValue: ChannelContextValue = {
    channels: channelsMock,
    activeChannel: null,
    setActiveChannel: () => { }
}

type TActionType = 'channel';
interface IReducerAction {
    type: TActionType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>;
}

function reducer(state: ChannelContextValue, action: IReducerAction): ChannelContextValue {
    switch (action.type) {
        case 'channel':
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
}

export const ChannelContext = React.createContext<[ChannelContextValue, (type: TActionType, payload?: Record<string, any>)=> void]>([
    initialContextValue, 
    () =>{}
])

export const ChannelContextProvider = ({ 
    children, 
    activeChannel
}: {
    children: ReactNode;
    activeChannel?: IChannel | null;
}
) => {
    const [data, dispatch] = React.useReducer(reducer, activeChannel ? { ...initialContextValue }: initialContextValue);

    

    return (
        <ChannelContext.Provider value={[data, (t, p) => dispatch({ type: t, payload: p })]}>
            {children}
        </ChannelContext.Provider>
    )
}