import { memo } from 'react';

import { useTitle } from '../../../hooks/useTitle';
import { PATHS, PATHNAMES } from '../../../utils/constants';

import LoginOrRegister from '../LoginOrRegister';

const defaultProps = {
  passwordAutocomplete: 'new-password',
  title: 'Добро пожаловать!',
  buttonTitle: PATHNAMES.register.action,
  buttonSavingTitle: PATHNAMES.register.title,
  otherOption: {
    tagline: 'Уже зарегистрированы?',
    path: PATHS.login,
    title: PATHNAMES.login.action,
  },
};

const Register = memo((props) => {
  useTitle(PATHNAMES.register.title);

  return (
    <LoginOrRegister
      {...props}
      {...defaultProps}
      additionalInput={{
        title: 'Имя',
        name: 'name',
        props: {
          placeholder: 'Арт',
          pattern: '[A-Za-zА-ЯЁа-яё -]+',
        },
      }}
    />
  );
});

export default Register;
