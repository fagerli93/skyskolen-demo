import React from "react";
import logo from "./assets/firebase.svg";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="app-logo" src={logo} alt="Firebase logo" />
        <h1>Skyskolen firebase-workshop!</h1>
        <h2>Del 2</h2>
      </header>
    </div>
  );
}

export default App;
