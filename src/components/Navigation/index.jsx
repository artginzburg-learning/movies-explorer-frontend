import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import { pathNames, paths } from '../../utils/constants';

import './Navigation.scss';

const modalRoot = document.getElementById('modal-root');

export default function Navigation(props) {
  return createPortal(
    <section onClick={props.onClose} className="navigation">
      <nav className="navigation__container">
        <button onClick={props.onClose} type="button" className="navigation__close-button" />

        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink
              exact
              to={paths.main}
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to={paths.search}
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              {pathNames.search.title}
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to={paths.saved}
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              {pathNames.saved.title}
            </NavLink>
          </li>
        </ul>

        <Link to={paths.account} className="profile-button navigation__profile-button">
          Аккаунт
        </Link>
      </nav>
    </section>,
    modalRoot,
  );
}
