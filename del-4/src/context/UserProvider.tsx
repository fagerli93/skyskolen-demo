import { User } from "firebase/auth";
import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthProvider";

const UserContext = createContext<User | undefined>({} as User);

const UserProvider: React.FC = ({ children }) => {
    const { state } = useAuth();

    return (
        <UserContext.Provider value={state.user}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
