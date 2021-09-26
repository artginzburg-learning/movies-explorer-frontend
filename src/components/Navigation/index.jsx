import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

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
              to="/"
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to="/movies"
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to="/saved-movies"
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <Link to="/profile" className="profile-button navigation__profile-button">
          Аккаунт
        </Link>
      </nav>
    </section>,
    modalRoot,
  );
}
