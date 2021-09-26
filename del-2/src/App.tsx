import AppContainer from "./components/AppContainer";
import Header from "./components/Header";
import useFirebase from "./utils/firebaseConfig";

function App() {
    useFirebase();
    return (
        <>
            <Header />
            <AppContainer>Firebase workshop!</AppContainer>
        </>
    );
}

export default App;
