import { useTitle } from '../../hooks/useTitle';

import Header from '../Header';

import './Profile.scss';

export default function Profile({ user = {}, loggedIn, ...props }) {
  useTitle('Профиль');

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h2 className="profile__title">Привет, {user.name}!</h2>

        <ul className="profile__details">
          <li className="profile__details-item">
            <h3 className="profile__details-heading">Имя</h3>
            <p className="profile__details-text">{user.name}</p>
          </li>
          <li className="profile__details-item">
            <h3 className="profile__details-heading">E-mail</h3>
            <p className="profile__details-text">{user.email}</p>
          </li>
        </ul>

        <div className="profile__buttons">
          <button type="button" className="profile__button">
            Редактировать
          </button>
          <button
            onClick={props.handleSignOut}
            type="button"
            className="profile__button profile__button_type_dangerous"
          >
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </>
  );
}
