import ChatRoom from "./components/ChatRoom";
import LoginComponent from "./components/LoginComponent";
import { useAuth } from "./context/AuthProvider";
import Header from "./components/Header";
import SignOutButton from "./components/SignOutButton";
import AppContainer from "./components/AppContainer";
import useFirebase from "./utils/firebaseConfig";

function App() {
    useFirebase();
    const { state, signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    };

    return (
        <>
            <Header
                actions={
                    state.isLoggedIn
                        ? [
                              <SignOutButton
                                  key='signIn'
                                  signOut={handleSignOut}
                              />,
                          ]
                        : []
                }
            />
            <AppContainer>
                {state.isLoggedIn ? <ChatRoom /> : <LoginComponent />}
            </AppContainer>
        </>
    );
}

export default App;
