interface IChannel {
    id: string;
    name: string;
    public: boolean;
    dm: boolean;
    users?: IUser[];
    messages?: IMessage[];
}

interface IMessage {
    id: number;
    content: string;
    user: IUser;
    channel: IChannel;
    createdAt: Date;
}

interface IUser {
    id: number;
    avatar: string;
    username: string;
    email: string;
    password: string;
    channels: IChannel[];
    messages: IMessage[];
}

interface IState {
    user: IUser;
    channels: IChannel[];
    messages: IMessage[];
}

// Path: src/components/Channel.tsx
