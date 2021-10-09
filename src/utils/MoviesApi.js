import Api from './Api';
import { API_DOMAIN } from './constants';

class MoviesApi extends Api {
  getAllMovies() {
    return this._customFetch('');
  }
}

export default new MoviesApi({ baseUrl: `https://${API_DOMAIN}/beatfilm-movies` });
