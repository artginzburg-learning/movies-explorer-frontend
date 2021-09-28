import { memo } from 'react';

import { useTitle } from '../../../hooks/useTitle';
import { pathNames, paths } from '../../../utils/constants';

import LoginOrRegister from '../LoginOrRegister';

const defaultProps = {
  passwordAutocomplete: 'current-password',
  title: 'Рады видеть!',
  buttonTitle: pathNames.login.action,
  buttonSavingTitle: pathNames.login.title,
  otherOption: {
    tagline: 'Ещё не зарегистрированы?',
    path: paths.register,
    title: pathNames.register.title,
  },
};

const Login = memo((props) => {
  useTitle(pathNames.login.title);

  return <LoginOrRegister {...props} {...defaultProps} />;
});

export default Login;
