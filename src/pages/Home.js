import React, {useEffect} from 'react';
// Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home() {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h2>This is your Home</h2>
    </div>
  )
}

export default Home
