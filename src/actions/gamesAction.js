import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchGameURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  // fetch data with axios
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      new: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

// Action Creator
export const fetchSearch = (gameName) => async (dispatch) => {
  // fetch data with axios
  const searchGames = await axios.get(searchGameURL(gameName));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

