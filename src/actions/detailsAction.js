import axios from "axios";
import { gameDetailsURL, gameScreenURL } from "../api";

// Action Creator
export const loadDetails = (id) => async (dispatch) => {
  // fetch data with axios
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenData = await axios.get(gameScreenURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailsData.data,
      screen: screenData.data,
    },
  });
};
