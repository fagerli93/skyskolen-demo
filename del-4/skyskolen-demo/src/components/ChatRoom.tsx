import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import useMessages from "../hooks/useMessages";
import ChatMessageGroup from "./ChatMessageGroup";
import ChatInput from "./ChatInput";

const ChatRoom: React.FC = () => {
    const { messages, sendMessage } = useMessages({
        collection: "messages",
        orderBy: "date",
    });
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(newMessage);

        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <>
            <Container className='chat-room-container'>
                <Container className='chat-messages-container'>
                    <ChatMessageGroup messages={messages} />
                </Container>
            </Container>
            <Form onSubmit={handleSubmit}>
                <ChatInput value={newMessage} onChange={setNewMessage} />
            </Form>
        </>
    );
};

export default ChatRoom;
