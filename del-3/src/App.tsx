import "./styles/App.scss";
import ChatRoom from "./components/ChatRoom";
import LoginComponent from "./components/LoginComponent";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { state } = useAuth();

  return (
    <div className="app">
      {state.isLoggedIn ? <ChatRoom /> : <LoginComponent />}
    </div>
  );
}

export default App;
