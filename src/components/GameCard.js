import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
// React Router
import { Link } from "react-router-dom";
// Import resizeSmal() function
import { resizeSmall } from "../util";

function GameCard({ id, name, released, image }) {
  const stringPathID = id.toString();
  console.log(typeof stringPathID);
  // FETCH THE GAME DETAILS
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    // This line hides the main scrollbar 
    document.body.style.overflow = "hidden";
    // Call the loadDetails function when a card is clicked
    dispatch(loadDetails(id));
  };

  return (
    <StyledGameCard layoutId={stringPathID} onClick={loadDetailsHandler}>
      <Link to={`games/${id}`}>
        <h3 layoutId={`title ${stringPathID}`}>{name}</h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathID}`} src={resizeSmall(image, 640)} alt={name} />
      </Link>
    </StyledGameCard>
  );
}

const StyledGameCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`;
export default GameCard;
