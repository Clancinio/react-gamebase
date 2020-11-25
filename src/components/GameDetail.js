import React from "react";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Import resizeSmal() function
import { resizeSmall } from "../util";

function GameDetail() {
  // useHistory
  const history = useHistory();
  // Exit GameDetail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if ((element.classlist = "shadow")) {
      // Show the main scroll bar
      document.body.style = "auto";
      // Go back to home
      history.push("/");
    }
  };
  // Get data from state
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Details>
            {/* stats - game name, rating, and platfroms */}
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={resizeSmall(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>{game.description_raw}</Description>
            <div className="gallary">
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    src={resizeSmall(screen.image, 1280)}
                    alt=""
                    key={screen.id}
                  />
                ))}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
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
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3d98bb;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: #fff;
  position: absolute;
  color: #000;
  left: 10%;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// platforms wrapper
const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 60vh;
    object-fit: cover; */
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
