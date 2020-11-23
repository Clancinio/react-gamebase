import React from "react";
// Redux
import { useSelector } from "react-redux";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function GameDetail() {
  // Get data from state
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <Details>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms &&
                game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">{game.description_raw}</div>
        <div className="gallary">
          {screen.results &&
            screen.results.map((screen) => (
              <img src={screen.image} alt="" key={screen.id} />
            ))}
        </div>
      </Details>
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #3d98bb;
    }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: #fff;
  position: absolute;
  color: #000;
  left: 10%;
  img{
    width: 100%;
  }
`;
export default GameDetail;
