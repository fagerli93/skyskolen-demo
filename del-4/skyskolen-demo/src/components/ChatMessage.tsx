import React from "react";
import { formatRelative } from "date-fns";
import { Message } from "../hooks/useMessages";

interface ChatMessageProps {
    message: Message;
    /** Whether or not a user is the logged in user - will give a different color for active user */
    isActiveUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isActiveUser }) => {
    const upperClass = !isActiveUser
        ? "single-chat  d-flex justify-content-start mb-2"
        : "single-chat d-flex justify-content-end mb-2";
    const bodyClass = !isActiveUser
        ? "bg-secondary text-white p-2 w-50 single-chat-text rounded text-left "
        : "bg-primary text-white  p-2 w-50 single-chat-text rounded text-left";
    return (
        <div className={upperClass}>
            {!isActiveUser && message.photo && (
                <img className='user-photo' src={message.photo} alt='User' />
            )}
            <div className={bodyClass}>
                <div className='chat-header'>
                    <div>{message.name}</div>
                    <div>
                        {formatRelative(new Date(message.date), new Date())}
                    </div>
                </div>
                <div className='chat-content'>{message.message}</div>
            </div>
            {isActiveUser && message.photo && (
                <img className='user-photo' src={message.photo} alt='User' />
            )}
        </div>
    );
};

export default ChatMessage;
