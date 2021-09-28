import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import { paths } from '../../utils/constants';

import Navigation from '../Navigation';

import './Header.scss';

function Header({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback((e) => {
    e.target === e.currentTarget && setIsMenuOpen(false);
  }, []);

  return (
    <header className="header">
      <nav className="header__links">
        <Link to={paths.main} className="logo header__logo">
          <img className="logo__img" alt="Movies Explorer" src={logo} />
        </Link>

        {loggedIn && (
          <div className="header__navigation">
            <NavLink
              activeClassName="header__navigation-link_active"
              to={paths.search}
              className="header__navigation-link"
            >
              Фильмы
            </NavLink>
            <NavLink
              activeClassName="header__navigation-link_active"
              to={paths.saved}
              className="header__navigation-link"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
        )}
      </nav>

      <div className="header__profile">
        {loggedIn ? (
          <>
            <Link to={paths.account} className="profile-button header__profile-button">
              Аккаунт
            </Link>
            <button type="button" onClick={openMenu} className="header__burger" />
            {isMenuOpen && <Navigation onClose={closeMenu} />}
          </>
        ) : (
          <>
            <Link to={paths.register} className="header__profile-link">
              Регистрация
            </Link>
            <Link to={paths.login} className="header__profile-link">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
