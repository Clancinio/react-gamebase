import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  // rename gamesReducer to games
  games: gamesReducer,
});

export default rootReducer;