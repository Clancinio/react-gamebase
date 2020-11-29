import React, { useState } from "react";
// Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
// Redux
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
// Images
import monster from "../images/monster.svg";

function Nav() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    console.log("search submitted");
    dispatch(fetchSearch(searchInput));
    setSearchInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav >
      <Logo onClick={clearSearched} variants={ fadeIn } initial="hidden" animate="show">
        <h1>GameBase</h1>
        <img src={monster} alt="ghost" />
      </Logo>
      <InputStyled className="search" variants={ fadeIn } initial="hidden" animate="show">
        <input value={searchInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </InputStyled>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  background: #3d98bb;
  padding: 3rem 5rem;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    color: white;
  }
  input {
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
  }
  & button:hover {
    border: 3px solid #bd8c3d;
    color: #bd8c3d;
  }
`;

const InputStyled = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  img {
    width: 60px;
    fill: white;
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
