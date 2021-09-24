import React from "react";
import logo from "../assets/firebase.svg";
import { useUser } from "../context/UserProvider";
import LogOutButton from "./LogoutButton";

const ChatRoom: React.FC = () => {
    const user = useUser();
    return (
        <header className='app-header'>
            <img className='app-logo' src={logo} alt='Firebase logo' />
            <h1>Skyskolen firebase-workshop!</h1>
            <h2>Del 3</h2>
            <h3>Godt jobbet {user?.displayName}</h3>

            <LogOutButton />
        </header>
    );
};

export default ChatRoom;
