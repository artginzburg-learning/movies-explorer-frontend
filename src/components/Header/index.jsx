import { repository } from '../../../package.json';
import logo from '../../images/logo.svg';
import './Header.scss';

const loggedIn = true;

function Header() {
  return (
    <header className="header">
      <div className="header__links">
        <a href={repository} className="logo header__logo">
          <img className="logo__img" alt="Movies Explorer" src={logo} />
        </a>

        {loggedIn && (
          <div className="header__navigation">
            <a href="/movies" className="header__navigation-link">
              Фильмы
            </a>
            <a href="/saved-movies" className="header__navigation-link">
              Сохранённые фильмы
            </a>
          </div>
        )}
      </div>

      <div className="header__profile">
        {loggedIn ? (
          <a href="/profile" className="header__profile-button">
            Аккаунт
          </a>
        ) : (
          <>
            <a href="/signup" className="header__profile-link">
              Регистрация
            </a>
            <a href="/signin" className="header__profile-link">
              Войти
            </a>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
