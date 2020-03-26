import {
  SHOW_CHARACTER_SUCCESS,
  SHOW_CHARACTER_REQUEST,
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  SHOW_SEARCH_CHARACTER_SUCCESS,
  SHOW_SEARCH_CHARACTER_REQUEST,
  GET_ALIVE_CHARACTERS,
  GET_DEAD_CHARACTERS, GET_ALL_CHARACTERS,
} from "../constants/constants";

const initialState = {
  characters: [],
  characterItem: [],
  searchCharacters: [],
};

export function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      console.log(action.payload, 'payload GET_CHARACTERS_SUCCESS');
      return {
        ...state,
        characters: action.payload.data
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
    case SHOW_SEARCH_CHARACTER_SUCCESS:
      console.log(action.payload, 'payload SHOW_SEARCH_CHARACTER_SUCCESS');
      return {
        ...state,
          searchCharacters: action.payload.data
      };
    case SHOW_SEARCH_CHARACTER_REQUEST:
      console.log(action.payload, 'payload SHOW_SEARCH_CHARACTER_REQUEST');
      return {
        ...state,
      };
    case GET_ALIVE_CHARACTERS:
      console.log(action.payload, 'payload GET_ALIVE_CHARACTERS');
      return {
        ...state,
        characters: [...state.characters].filter(param => action.payload === param.status)
      };
    case GET_DEAD_CHARACTERS:
      console.log(action.payload, 'payload GET_DEAD_CHARACTERS');
      return {
        ...state,
        characters: [...state.characters].filter(param => action.payload !== param.status)
      };
    default:
      return {
        ...state
      }
  }
}
