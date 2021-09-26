import React from "react";
import { Container } from "react-bootstrap";
import { useUser } from "../context/UserProvider";

const ChatRoom: React.FC = () => {
    const user = useUser();
    return (
        <>
            <Container className='chat-room-container'>
                <h1>{`Hei ${user?.displayName}`}</h1>
            </Container>
        </>
    );
};

export default ChatRoom;
