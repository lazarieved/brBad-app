import {
  GET_EPISODES_REQUEST,
  GET_EPISODES_SEASON_REQUEST,
  GET_EPISODES_SEASON_SUCCESS,
  GET_EPISODES_SUCCESS,
  GET_SEASON_NUM,
  SHOW_CHARACTER_REQUEST,
  SHOW_CHARACTER_SUCCESS,
  SHOW_EPISODE_REQUEST,
  SHOW_EPISODE_SUCCESS,
} from "../constants/constants";

const initialState = {
  episodes: [],
  episodesSeason: [],
  seasonNumber: 1,
  episodeItem: [],
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
    case SHOW_EPISODE_SUCCESS:
      console.log(action.payload, 'payload SHOW_EPISODE_SUCCESS');
      return {
        ...state,
        episodeItem: action.payload.data
      };
    case SHOW_EPISODE_REQUEST:
      console.log(action.payload, 'payload SHOW_EPISODE_REQUEST');
      return {
        ...state,
      };
    default:
      return {
        ...state
      }
  }
}
