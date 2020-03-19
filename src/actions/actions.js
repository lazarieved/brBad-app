import Api from '../api/Api'
import {
  SHOW_CHARACTER_SUCCESS,
  SHOW_CHARACTER_REQUEST,
  GET_CHARACTERS_FAILED,
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_EPISODES_FAILED,
  GET_EPISODES_REQUEST,
  GET_EPISODES_SUCCESS,
  SHOW_CHARACTER_FAILED,
} from "../constants/constants";

export const showAllCharacters = url => dispatch => {
  const types = [GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILED];
  return Api.showAllCharacters(url, types, dispatch)
};
export const showAllEpisodes = url => dispatch => {
  const types = [GET_EPISODES_REQUEST, GET_EPISODES_SUCCESS, GET_EPISODES_FAILED];
  return Api.showAllEpisodes(url, types, dispatch)
};
export const showCharacter = (url) => dispatch => {
  const types = [SHOW_CHARACTER_REQUEST, SHOW_CHARACTER_SUCCESS, SHOW_CHARACTER_FAILED];
  return Api.showCharacter(url, types, dispatch)
};
