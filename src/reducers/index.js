import {combineReducers} from "redux";
import {charactersReducer} from "./charactersReducer";
import {episodeReducer} from "./episodesReducer";

export const rootReducer = combineReducers({
  charactersReducer: charactersReducer,
  episodeReducer: episodeReducer,
});
