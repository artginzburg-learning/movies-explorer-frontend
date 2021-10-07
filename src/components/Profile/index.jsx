import { useState } from 'react';

import {
  sendApiUpdate,
  useCurrentUser,
  useCurrentUserDispatcher,
} from '../../contexts/CurrentUserContext';

import { useTitle } from '../../hooks/useTitle';
import useValidatedForm from '../../hooks/useValidatedForm';

import { formClassesConfig } from '../../utils/utils';
import { classNames } from '../../utils/toClassNames';

import Header from '../Header';
import Form from '../Form';
import FormInput from '../FormInput';

import './Profile.scss';

const propsForInputs = {
  autoCorrect: 'off',
  spellCheck: false,
  className: `${formClassesConfig.inputClass}_theme_dark profile__details-text`,
};

export default function Profile({ loggedIn, ...props }) {
  useTitle('Профиль');

  const [status, setStatus] = useState('');

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  const { reset, ...form } = useValidatedForm(currentUser);

  async function handleSubmit() {
    const res = await sendApiUpdate(setCurrentUser, currentUser, form.getData(), 'updateUserInfo')
      .then(() => {
        setStatus('');
        setTimeout(() => {
          setStatus('Данные успешно обновлены!');
        });
      })
      .catch((err) => {
        setStatus('');
        setTimeout(() => {
          err.message
            ? setStatus(
                err.message +
                  (err.validation?.body?.message ? ` — ${err.validation.body.message}` : ''),
              )
            : console.log(err);
        });
      });
    // props.onUpdateUser();
    // console.log(res);
    return res;
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Form className="profile" onSubmit={handleSubmit} onReset={form.reset}>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>

          <div className="profile__details">
            <label className="profile__details-item">
              <p className="profile__details-heading">Имя</p>
              <div className="profile__input-container">
                <FormInput
                  {...propsForInputs}
                  autoComplete="name"
                  {...form.register('name')}
                  placeholder="Арт Гинзбург"
                />
              </div>
            </label>

            <label className="profile__details-item">
              <p className="profile__details-heading">E-mail</p>
              <div className="profile__input-container">
                <FormInput
                  {...propsForInputs}
                  type="email"
                  autoComplete="email"
                  {...form.register('email')}
                  placeholder="art.ginzburg@ya.ru"
                />
              </div>
            </label>
          </div>

          <p {...classNames(['profile__status', status && 'profile__status_visible'])}>{status}</p>

          <div className="profile__buttons">
            <button type="submit" disabled={form.isInvalid} className="profile__button">
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
        </Form>
      </main>
    </>
  );
}
