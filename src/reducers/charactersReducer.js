import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
} from "../constants/constants";

const initialState = {
  characters: [],
};

export function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      console.log(action.payload, 'payload GET_CHARACTERS_SUCCESS');
      return {
        ...state,
        characters: [...state.characters, ...action.payload.data]
      };
    case GET_CHARACTERS_REQUEST:
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
