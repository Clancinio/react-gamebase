import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  // rename gamesReducer to games
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
