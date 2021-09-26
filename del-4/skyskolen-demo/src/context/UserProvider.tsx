import { User } from "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthProvider";

const UserContext = createContext<User | undefined>({} as User);

const UserProvider: React.FC = ({ children }) => {
  const { state } = useAuth();

  useEffect(() => {
    console.log("User set in userprovider", state.user);
  }, [state.user]);

  return (
    <UserContext.Provider value={state.user}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
