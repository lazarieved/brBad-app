import {
  GET_EPISODES_REQUEST,
  GET_EPISODES_SUCCESS,
} from "../constants/constants";

const initialState = {
  episodes: [],
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
    default:
      return {
        ...state
      }
  }
}
