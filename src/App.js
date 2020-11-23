import React from "react";
// Components and Pages
import Home from "./pages/Home";
// Styling and Animation
import GlobalStyle from "./components/GlobalStyles";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
