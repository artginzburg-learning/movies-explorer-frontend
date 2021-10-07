import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import { PATHNAMES, PATHS } from '../../utils/constants';

import Navigation from '../Navigation';

import './Header.scss';

function Header({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback((e) => {
    if (!e || e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="header">
      <nav className="header__links">
        <Link to={PATHS.main} className="logo header__logo">
          <img className="logo__img" alt={PATHNAMES.global.title} src={logo} />
        </Link>

        {loggedIn && (
          <div className="header__navigation">
            <NavLink
              activeClassName="header__navigation-link_active"
              to={PATHS.search}
              className="header__navigation-link"
            >
              {PATHNAMES.search.title}
            </NavLink>
            <NavLink
              activeClassName="header__navigation-link_active"
              to={PATHS.saved}
              className="header__navigation-link"
            >
              {PATHNAMES.saved.title}
            </NavLink>
          </div>
        )}
      </nav>

      <div className="header__profile">
        {loggedIn ? (
          <>
            <Link to={PATHS.account} className="profile-button header__profile-button">
              {PATHNAMES.account.title}
            </Link>
            <button type="button" onClick={openMenu} className="header__burger" />
            {isMenuOpen && <Navigation onClose={closeMenu} />}
          </>
        ) : (
          <>
            <Link to={PATHS.register} className="header__profile-link">
              {PATHNAMES.register.title}
            </Link>
            <Link to={PATHS.login} className="header__profile-link">
              {PATHNAMES.login.action}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
