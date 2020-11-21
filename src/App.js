import React from "react";
// Components and Pages
import Home from "./pages/Home";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
