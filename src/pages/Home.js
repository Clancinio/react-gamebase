import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import GameCard from "../components/GameCard";

function Home() {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get the data from the state
  const { newGames, popular, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
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
    </GameList>
  );
}

const GameList = styled(motion.div)``;

const Games = styled(motion.div)``;

export default Home;
