import React from "react";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Import resizeSmal() function
import { resizeSmall } from "../util";
// Images
import apple from "../images/apple.svg";
import gamepad from "../images/gamepad.svg";
import nintendo from "../images/nintendo.svg";
import playstation from "../images/playstation.svg";
import steam from "../images/steam.svg";
import xbox from "../images/xbox.svg";

function GameDetail({ pathId }) {
  // useHistory
  const history = useHistory();
  // Exit GameDetail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      // Show the main scroll bar
      document.body.style = "auto";
      // Go back to home
      history.push("/");
    }
  };
  // Get platform images
  const getPlatformImages = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  // Get data from state
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Details layoutId={pathId}>
            {/* stats - game name, rating, and platfroms */}
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        alt={data.platform.name}
                        key={data.platform.id}
                        src={getPlatformImages(data.platform.name)}
                      ></img>
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
                  <motion.img
                    layoutId={`image ${pathId}`}
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
  z-index: 5;
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
  z-index: 10;
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
