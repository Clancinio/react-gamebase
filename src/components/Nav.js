import React from 'react'
// Styles and Animations
import styled from "styled-components"
import { motion } from "framer-motion";

function Nav() {
  return (
    <StyledNav>
      <Logo>
        <h1>GameBase</h1>
      </Logo>
      <InputStyled className="search">
        <input type="text"/>
        <button>Search</button>
      </InputStyled>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  background: #3d98bb;
  padding: 3rem 5rem;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    color: white
  }
  input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    font-weight: bold;
    padding: 0.55rem 2rem;
    margin-left: 0.7rem;
    background: #3d98bb;
    border: 3px solid white;
    border-radius: 5px;
    color: white;
    outline: none;
    cursor: pointer;
  } & button:hover {
    border: 3px solid #BD8C3D;
    color: #BD8C3D;
  }
`;

const InputStyled = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Logo = styled(motion.nav)`
`;

export default Nav
