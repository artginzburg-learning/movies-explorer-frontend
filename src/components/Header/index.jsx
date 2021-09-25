import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Header.scss';

const loggedIn = true;

function Header() {
  return (
    <header className="header">
      <div className="header__links">
        <Link to="/" className="logo header__logo">
          <img className="logo__img" alt="Movies Explorer" src={logo} />
        </Link>

        {loggedIn && (
          <div className="header__navigation">
            <NavLink
              activeClassName="header__navigation-link_active"
              to="/movies"
              className="header__navigation-link"
            >
              Фильмы
            </NavLink>
            <NavLink
              activeClassName="header__navigation-link_active"
              to="/saved-movies"
              className="header__navigation-link"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
        )}
      </div>

      <div className="header__profile">
        {loggedIn ? (
          <Link to="/profile" className="header__profile-button">
            Аккаунт
          </Link>
        ) : (
          <>
            <Link to="/signup" className="header__profile-link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__profile-link">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
