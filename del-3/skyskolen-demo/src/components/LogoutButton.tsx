import { useAuth } from "../context/AuthProvider";

const LogOutButton = () => {
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
    };

    return <button onClick={handleLogout}>Logg ut!</button>;
};

export default LogOutButton;
