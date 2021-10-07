import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import { PATHNAMES, PATHS } from '../../utils/constants';

import './Navigation.scss';

const modalRoot = document.getElementById('modal-root');

export default function Navigation(props) {
  function closeMenuIfNeeded(e) {
    if (!e.target.className.includes('active')) {
      props.onClose();
    }
  }

  return createPortal(
    <section onClick={props.onClose} className="navigation">
      <nav className="navigation__container">
        <button onClick={props.onClose} type="button" className="navigation__close-button" />

        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink
              exact
              to={PATHS.main}
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to={PATHS.search}
              className="navigation__link"
              activeClassName="navigation__link_active"
              onClick={closeMenuIfNeeded}
            >
              {PATHNAMES.search.title}
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to={PATHS.saved}
              className="navigation__link"
              activeClassName="navigation__link_active"
              onClick={closeMenuIfNeeded}
            >
              {PATHNAMES.saved.title}
            </NavLink>
          </li>
        </ul>

        <Link to={PATHS.account} className="profile-button navigation__profile-button">
          {PATHNAMES.account.title}
        </Link>
      </nav>
    </section>,
    modalRoot,
  );
}
