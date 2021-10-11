export const API_DOMAIN = 'api.nomoreparties.co';

export const PATHS = {
  main: '/',
  search: '/movies',
  saved: '/saved-movies',
  login: '/signin',
  register: '/signup',
  account: '/profile',
};

export const PATHNAMES = {
  global: {
    title: 'Movies Explorer',
  },
  search: {
    title: 'Фильмы',
  },
  saved: {
    title: 'Сохранённые фильмы',
  },
  login: {
    title: 'Вход',
    action: 'Войти',
  },
  register: {
    title: 'Регистрация',
    action: 'Зарегистрироваться',
  },
  account: {
    title: 'Аккаунт',
  },
};

export const MOVIES_CONFIG = {
  shortDuration: 40,
  defaultType: 'add',
};

export const FORM_CLASSES = {
  inputClass: 'form__input',
  submitButtonClass: 'form__button',
};

export const PATTERNS = {
  email: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$',
};

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noreferrer',
};
