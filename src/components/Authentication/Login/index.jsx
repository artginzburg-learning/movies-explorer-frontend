import { memo } from 'react';

import { useTitle } from '../../../hooks/useTitle';
import { PATHNAMES, PATHS } from '../../../utils/constants';

import LoginOrRegister from '../LoginOrRegister';

const defaultProps = {
  passwordAutocomplete: 'current-password',
  title: 'Рады видеть!',
  buttonTitle: PATHNAMES.login.action,
  buttonSavingTitle: PATHNAMES.login.title,
  otherOption: {
    tagline: 'Ещё не зарегистрированы?',
    path: PATHS.register,
    title: PATHNAMES.register.title,
  },
};

const Login = memo((props) => {
  useTitle(PATHNAMES.login.title);

  return <LoginOrRegister {...props} {...defaultProps} />;
});

export default Login;
