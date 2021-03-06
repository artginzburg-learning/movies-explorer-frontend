export default class Api {
  constructor(options = {}) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  _handleFetch = async (res) => {
    const parsed = await res.json();

    return res.ok ? parsed : Promise.reject(parsed ?? res.statusText);
  };

  _handleData = (result) => result.data ?? result;

  _customFetch(target, method, body) {
    const options = {
      headers: this._headers ?? {},
      credentials: this._credentials,
    };

    if (method && method !== 'GET') {
      options.method = method;
      if (method !== 'DELETE') {
        options.headers['Content-Type'] = 'application/json';
      }
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${target}`, options)
      .then(this._handleFetch)
      .then(this._handleData);
  }
}
