import React from "react";
// Components and Pages
import Home from "./pages/Home";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <h1>Hello GameBase</h1>
      <Home />
    </div>
  );
}

export default App;
