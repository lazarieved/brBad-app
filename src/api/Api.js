import axios from 'axios';

class Api {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }
  showAllCharacters = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showAllEpisodes = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showSeasonEpisodes = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  showCharacter = (url, types, dispatch, params) => this.handle(types, url, dispatch, params);
  typeByStatus = (types, status) => types.find(item => item.includes(status));
  handle = (types, url, dispatch, params = {}) => {
    let config = {
      params
    };
    console.log(url, types, 'hundle');
    dispatch({
      type: this.typeByStatus(types, 'REQUEST'),
    });
    axios.get(`${this.baseURL}${url}`, config)
      .then(response => {
        console.log(response, 'api-response');
        dispatch({
          type: this.typeByStatus(types, 'SUCCESS'),
          payload: response
        });
      })
      .catch((error) => {
        console.log(error, 'api-error');
        dispatch({
          type: this.typeByStatus(types, 'FAILED'),
          payload: error
        })
      });
  };
}

export default new Api('https://www.breakingbadapi.com/api/');




