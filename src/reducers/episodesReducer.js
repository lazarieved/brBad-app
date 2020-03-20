import {
  GET_EPISODES_REQUEST, GET_EPISODES_SEASON_REQUEST, GET_EPISODES_SEASON_SUCCESS,
  GET_EPISODES_SUCCESS, GET_SEASON_NUM,
} from "../constants/constants";

const initialState = {
  episodes: [],
  episodesSeason: [],
  seasonNumber: 1,
};

export function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EPISODES_SUCCESS:
      console.log(action.payload, 'payload GET_CHARACTERS_SUCCESS');
      return {
        ...state,
        episodes: [...state.episodes, ...action.payload.data]
      };
    case GET_EPISODES_REQUEST:
      console.log(action.payload, 'payload GET_CHARACTERS_REQUEST');
      return {
        ...state,
      };
    case GET_EPISODES_SEASON_SUCCESS:
      console.log(action.payload, 'payload GET_EPISODES_SEASON_SUCCESS');
      return {
        ...state,
        episodesSeason: action.payload.data
      };
    case GET_EPISODES_SEASON_REQUEST:
      console.log(action.payload, 'payload GET_EPISODES_SEASON_REQUEST');
      return {
        ...state,
      };
    case GET_SEASON_NUM:
      console.log(action.payload, 'payload GET_SEASON_NUM');
      return {
        ...state,
        seasonNumber: action.payload,
      };
    default:
      return {
        ...state
      }
  }
}
