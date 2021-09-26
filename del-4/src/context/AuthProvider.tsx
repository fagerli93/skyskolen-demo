import { useContext } from "react";
import { createContext } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut as signOutUser,
    User,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface AuthContextInterface {
    state: UserState;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextInterface>(
    {} as AuthContextInterface
);

export interface UserState {
    user?: User;
    isLoggedIn: boolean;
}

const AuthProvider: React.FC = ({ children }) => {
    const [state, setState] = useState<UserState>({
        user: undefined,
        isLoggedIn: false,
    } as UserState);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, handleOnAuthStateChanged);

        return unsub;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnAuthStateChanged = (user: any) => {
        setState({ ...state, user: user, isLoggedIn: !!user });
    };

    const signIn = async (): Promise<void> => {
        try {
            await setPersistence(auth, browserLocalPersistence);
            const res = await signInWithPopup(auth, provider);
            setState({ ...state, user: res.user, isLoggedIn: true });
        } catch (err) {
            setState({ ...state, user: undefined, isLoggedIn: false });
        }
    };

    const signOut = async (): Promise<void> => {
        await signOutUser(auth);
        setState({ ...state, user: undefined, isLoggedIn: false });
    };

    return (
        <AuthContext.Provider value={{ state, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
