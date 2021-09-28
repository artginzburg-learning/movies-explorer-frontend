import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';

import { pathNames, paths } from '../../../utils/constants';

import LoginOrRegister from '../LoginOrRegister';

const defaultProps = {
  passwordAutocomplete: 'current-password',
  title: 'Добро пожаловать!',
  buttonTitle: pathNames.login.action,
  buttonSavingTitle: pathNames.login.title,
};

const Login = memo((props) => {
  useTitle(pathNames.login.title);

  return (
    <LoginOrRegister {...props} {...defaultProps}>
      <div className="auth__signin">
        Ещё не зарегистрированы?{' '}
        <Link to={paths.register} className="auth__login-link">
          {pathNames.register.title}
        </Link>
      </div>
    </LoginOrRegister>
  );
});

export default Login;
