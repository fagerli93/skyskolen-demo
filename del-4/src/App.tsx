import ChatRoom from "./components/ChatRoom";
import LoginComponent from "./components/LoginComponent";
import AppContainer from "./components/AppContainer";
import { useAuth } from "./context/AuthProvider";
import useFirebase from "./utils/firebaseConfig";
import Header from "./components/Header";
import SignOutButton from "./components/SignOutButton";

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
