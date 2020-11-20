import React, {useEffect} from 'react';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home() {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get the data from the state 
  const {newGames, popular, upcoming} = useSelector(state => state.games);
  
  return (
    <div>
      <h2>This is your Home</h2>
    </div>
  )
}

export default Home
