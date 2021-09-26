import React from "react";
import { useUser } from "../context/UserProvider";
import { Message } from "../hooks/useMessages";
import ChatMessage from "./ChatMessage";

interface ChatMessageGroupProps {
    messages: Message[];
}

const ChatMessageGroup: React.FC<ChatMessageGroupProps> = ({ messages }) => {
    const user = useUser();
    return (
        <>
            {messages.map(message => (
                <ChatMessage
                    key={message.id}
                    message={message}
                    isActiveUser={user?.uid === message.userId}
                />
            ))}
        </>
    );
};

export default ChatMessageGroup;
