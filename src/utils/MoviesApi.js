import Api from './Api';
import { apiDomain } from './constants';

class MoviesApi extends Api {
  getAllMovies() {
    return this._customFetch('');
  }
}

export default new MoviesApi({ baseUrl: `https://${apiDomain}/beatfilm-movies` });
