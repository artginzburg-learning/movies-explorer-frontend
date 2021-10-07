import { memo } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { PATHS } from '../../utils/constants';

import { parseFixedLocalBase64Value } from '../../hooks/useStateWithBase64';
import useValidatedForm from '../../hooks/useValidatedForm';

import Login from './Login';
import Register from './Register';

import './Authentication.scss';

const Authentication = memo((props) => {
  const form = useValidatedForm({
    email: parseFixedLocalBase64Value('email') ?? '',
    password: '',
  });

  return props.loggedIn ? (
    <Redirect to={PATHS.main} />
  ) : (
    <>
      <Route path={PATHS.login}>
        <Login handleSubmit={props.handleLogin} form={form} />
      </Route>
      <Route path={PATHS.register}>
        <Register handleSubmit={props.handleRegister} form={form} />
      </Route>
    </>
  );
});

export default Authentication;
