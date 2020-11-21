import axios from "axios";
import {gameDetailsURL} from "../api";

// Action Creator
export const loadDetails = (id) => async (dispatch) => {
  // fetch data with axios
  const detailsData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailsData.data,
    },
  });
};