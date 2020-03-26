import axios from 'axios';

class Api {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  showAllCharacters = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showAllEpisodes = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showSeasonEpisodes = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showCharacter = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showEpisode = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showSearchCharacters = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  typeByStatus = (types, status) => types.find(item => item.includes(status));
  handle = (types, url, dispatch, params = {}) => {
    let config = {
      params
    };
    dispatch({
      type: this.typeByStatus(types, 'REQUEST'),
    });
    axios.get(`${this.baseURL}${url}`, config)
      .then(response => {
        dispatch({
          type: this.typeByStatus(types, 'SUCCESS'),
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: this.typeByStatus(types, 'FAILED'),
          payload: error
        })
      });
  };
}

export default new Api('https://www.breakingbadapi.com/api/');




