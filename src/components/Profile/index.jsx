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

  const [buttonIsSaving, setButtonIsSaving] = useState(false);
  const buttonTitle = buttonIsSaving ? 'Сохранение...' : 'Редактировать';

  async function handleSubmit() {
    setButtonIsSaving(true);

    return await sendApiUpdate(setCurrentUser, currentUser, form.getData(), 'updateUserInfo')
      .then(() => {
        setStatus('');
        setTimeout(() => {
          setStatus('Изменения сохранены.');
        });
      })
      .catch((err) => {
        form.isInvalid = true;
        setStatus('');
        setTimeout(() => {
          err.message
            ? setStatus(
                err.message +
                  (err.validation?.body?.message ? ` — ${err.validation.body.message}` : ''),
              )
            : console.log(err);
        });
      })
      .finally(() => {
        setButtonIsSaving(false);
      });
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
                  disabled={buttonIsSaving}
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
                  disabled={buttonIsSaving}
                />
              </div>
            </label>
          </div>

          <p {...classNames(['profile__status', status && 'profile__status_visible'])}>{status}</p>

          <div className="profile__buttons">
            <button
              type="submit"
              disabled={form.isInvalid || buttonIsSaving}
              className="profile__button"
            >
              {buttonTitle}
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
