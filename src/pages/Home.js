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
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className={searched}>
            <SearchHeading>
            <h2 >Search Results</h2>
            <button onClick={clearSearched}>Clear</button>
            </SearchHeading>
            <Games>
              {searched.map((game) => (
                <GameCard
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={resizeSmall(game.background_image, 640)}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <GameCard
              id={game.id}
              name={game.name}
              released={game.released}
              image={resizeSmall(game.background_image, 640)}
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
              image={resizeSmall(game.background_image, 640)}
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
              image={resizeSmall(game.background_image, 640)}
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

const SearchHeading = styled(motion.div)`
margin-bottom: 1rem;
h2{
  padding-bottom: 1rem;
}
h3 {
  color: #bd8c3d;
}
button {
    font-size: 1rem;
    border: none;
    font-weight: bold;
    padding: 0.55rem 2rem;
    margin-left: 0.7rem;
    background: white;
    border: 3px solid #bd8c3d;
    border-radius: 5px;
    color: #bd8c3d;
    outline: none;
    cursor: pointer;
  }
  & button:hover {
    border: 3px solid #A27834;
    color: #A27834;
  }
`;

export default Home;
