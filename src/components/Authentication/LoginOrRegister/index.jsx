import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.svg';

import { pathNames, paths } from '../../../utils/constants';
import { classNames } from '../../../utils/toClassNames';
import { formClassesConfig } from '../../../utils/utils';

import Form from '../../Form';
import FormInput from '../../FormInput';

const propsForInputs = {
  autoCorrect: 'off',
  spellCheck: false,
  className: `${formClassesConfig.inputClass}_theme_dark`,
};

const inputNames = {
  email: 'email',
  password: 'password',
};

const LoginOrRegister = memo(({ form, additionalInput, ...props }) => {
  const [buttonIsSaving, setButtonIsSaving] = useState(false);
  const [status, setStatus] = useState('');

  const buttonTitle = buttonIsSaving ? `${props.buttonSavingTitle}...` : props.buttonTitle;

  function handleSubmit(e) {
    setButtonIsSaving(true);

    const { name, email, password } = form.getData();

    props
      .handleSubmit(e, email, password, name)
      .catch((err) => {
        form.isInvalid = true;
        setStatus('');
        setTimeout(() => {
          err.message ? setStatus(err.message) : console.log(err);
        });
      })
      .finally(() => {
        setButtonIsSaving(false);
      });
  }

  return (
    <div className="auth">
      <Link to={paths.main} className="logo auth__logo">
        <img className="logo__img" alt={pathNames.global.title} src={logo} />
      </Link>

      <h2 className="auth__title">{props.title}</h2>

      <Form onSubmit={handleSubmit} onReset={form.reset}>
        <div className="form__container">
          {additionalInput && (
            <label>
              <p className="auth__label">{additionalInput.title}</p>
              <FormInput
                {...propsForInputs}
                autoFocus
                {...form.register(additionalInput.name)}
                id={additionalInput.name}
                type={additionalInput.name}
                autoComplete={additionalInput.name}
                {...additionalInput.props}
                disabled={buttonIsSaving}
              />
            </label>
          )}
          <label>
            <p className="auth__label">E-mail</p>
            <FormInput
              {...propsForInputs}
              {...{ autoFocus: !additionalInput }}
              {...form.register(inputNames.email)}
              id={inputNames.email}
              type={inputNames.email}
              autoComplete={inputNames.email}
              placeholder="mail@example.com"
              disabled={buttonIsSaving}
            />
          </label>
          <label>
            <p className="auth__label">Пароль</p>
            <FormInput
              {...propsForInputs}
              {...form.register(inputNames.password)}
              type={inputNames.password}
              id={props.passwordAutocomplete}
              autoComplete={props.passwordAutocomplete}
              placeholder="n4Gorshke7idelKING"
              disabled={buttonIsSaving}
            />
          </label>
        </div>

        <p {...classNames(['auth__status', status && 'auth__status_visible'])}>{status}</p>

        <button
          type="submit"
          disabled={form.isInvalid || buttonIsSaving}
          className={`auth__button ${formClassesConfig.submitButtonClass} ${formClassesConfig.submitButtonClass}_theme_dark`}
        >
          {buttonTitle}
        </button>
      </Form>

      <p className="auth__signin">
        {`${props.otherOption.tagline} `}
        <Link to={props.otherOption.path} className="auth__signin-link">
          {props.otherOption.title}
        </Link>
      </p>
    </div>
  );
});

export default LoginOrRegister;
