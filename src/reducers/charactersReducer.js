import {
  SHOW_CHARACTER_SUCCESS,
  SHOW_CHARACTER_REQUEST,
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
} from "../constants/constants";

const initialState = {
  characters: [],
  characterItem: [],
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
    case SHOW_CHARACTER_SUCCESS:
      console.log(action.payload, 'payload SHOW_CHARACTER_SUCCESS');
      return {
        ...state,
        characterItem: action.payload.data
      };
    case SHOW_CHARACTER_REQUEST:
      console.log(action.payload, 'payload SHOW_CHARACTER_REQUEST');
      return {
        ...state,
      };
    default:
      return {
        ...state
      }
  }
}
