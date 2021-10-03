import { homepage } from '../../package.json';

import Api from './Api';

const { NODE_ENV } = process.env;

const apiHomepage = new URL(homepage);
apiHomepage.hostname = `api.${apiHomepage.hostname}`;
const apiPath = NODE_ENV === 'production' ? apiHomepage : 'https://localhost:3001/';

const api = {
  host: apiPath,
  endpoints: {
    register: 'signup',
    login: 'signin',
    logout: 'signout',
    user: 'users/me',
    movies: 'movies',
  },
};

class MainApi extends Api {
  register(email, password, name) {
    return this._customFetch(api.endpoints.register, 'POST', { name, password, email });
  }
  login(email, password) {
    return this._customFetch(api.endpoints.login, 'POST', { password, email });
  }
  logout() {
    return this._customFetch(api.endpoints.logout, 'DELETE');
  }

  getUserInfo() {
    return this._customFetch(api.endpoints.user);
  }
  updateUserInfo({ name, email }) {
    return this._customFetch(api.endpoints.user, 'PATCH', { name, email });
  }

  getMovies() {
    return this._customFetch(api.endpoints.movies);
  }
  saveMovie = (data) => this._customFetch(api.endpoints.movies, 'POST', data);
  deleteMovie = (movieId) => this._customFetch(`${api.endpoints.movies}/${movieId}`, 'DELETE');
}

export default new MainApi({ baseUrl: api.host, credentials: 'include' });
