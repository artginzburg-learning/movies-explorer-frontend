import { memo } from 'react';

import { useTitle } from '../../../hooks/useTitle';
import { paths, pathNames } from '../../../utils/constants';

import LoginOrRegister from '../LoginOrRegister';

const defaultProps = {
  passwordAutocomplete: 'new-password',
  title: 'Добро пожаловать!',
  buttonTitle: pathNames.register.action,
  buttonSavingTitle: pathNames.register.title,
  otherOption: {
    tagline: 'Уже зарегистрированы?',
    path: paths.login,
    title: pathNames.login.action,
  },
};

const Register = memo((props) => {
  useTitle(pathNames.register.title);

  return <LoginOrRegister {...props} {...defaultProps}></LoginOrRegister>;
});

export default Register;
