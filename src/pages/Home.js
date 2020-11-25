import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import GameCard from "../components/GameCard";
import GameDetail from "../components/GameDetail";
// React Router
import { useLocation } from "react-router-dom";
// Import resizeSmal() function
import { resizeSmall } from "../util";

function Home() {
  // Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get the data from the state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    // GameDetail - This is a popup that contains details of an individual game
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <GameCard
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <GameCard
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <GameCard
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
