import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useTitle } from '../../hooks/useTitle';

import Header from '../Header';

import './Profile.scss';

export default function Profile({ loggedIn, ...props }) {
  useTitle('Профиль');

  const currentUser = useCurrentUser();

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>

        <ul className="profile__details">
          <li className="profile__details-item">
            <h3 className="profile__details-heading">Имя</h3>
            <p className="profile__details-text">{currentUser.name}</p>
          </li>
          <li className="profile__details-item">
            <h3 className="profile__details-heading">E-mail</h3>
            <p className="profile__details-text">{currentUser.email}</p>
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
