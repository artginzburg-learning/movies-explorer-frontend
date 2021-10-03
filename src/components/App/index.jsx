import { useCallback, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import { paths } from '../../utils/constants';
import scrollToTop from '../../utils/scrollToTop';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import useStateWithLocalStorage from '../../hooks/useStateWithLocalStorage';
import useStateWithBase64 from '../../hooks/useStateWithBase64';

import { CurrentUserProvider, defaultUserState } from '../../contexts/CurrentUserContext';

import Authentication from '../Authentication';
import Main from '../Main';
import Movies from '../Movies';
import NotFound from '../NotFound';
import Profile from '../Profile';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser', defaultUserState);

  const [loggedIn, setLoggedIn] = useStateWithLocalStorage('loggedIn', false);
  const setEmail = useStateWithBase64('email', '')[1];

  const [cards, setCards] = useStateWithLocalStorage('cards', []);
  const [savedCards, setSavedCards] = useStateWithLocalStorage('savedCards', []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then(setCurrentUser)
        .catch((err) => console.log('Couldnt get user info from the server', err));
      moviesApi
        .getAllMovies()
        .then(setCards)
        .catch((err) => console.log('Couldnt get initial cards from the server', err));
      mainApi
        .getMovies()
        .then(setSavedCards)
        .catch((err) => console.log('Couldnt get saved cards from the server', err));
    }
  }, [loggedIn, setCards, setCurrentUser, setSavedCards]);

  const handleLogin = useCallback(
    (email) => {
      setEmail(email);
      setLoggedIn(true);
    },
    [setEmail, setLoggedIn],
  );

  const handleTokenCheck = useCallback(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res) {
          handleLogin(res.email);
          history.replace(paths.main);
        }
      })
      .catch((err) => {
        setLoggedIn(false);

        console.log(err);
      });
  }, [handleLogin, history, setLoggedIn]);

  function handleSubmitRegister(e_, email, password, name) {
    return mainApi
      .register(email, password, name)
      .then(() => {
        history.replace(paths.login);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmitLogin(e, email, password) {
    if (!email || !password) {
      return;
    }

    return mainApi
      .login(email, password)
      .then((data) => {
        if (data) {
          e.target.reset();

          handleLogin(email);
          history.push(paths.main);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        history.replace(paths.login);
        scrollToTop();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  return (
    <CurrentUserProvider state={currentUser} dispatch={setCurrentUser}>
      <Switch>
        <Route exact path={paths.main}>
          <Main loggedIn={loggedIn} />
        </Route>
        <Route path={[paths.register, paths.login]}>
          <Authentication
            loggedIn={loggedIn}
            handleLogin={handleSubmitLogin}
            handleRegister={handleSubmitRegister}
          />
        </Route>
        <ProtectedRoute path={paths.search} loggedIn={loggedIn}>
          <Movies savedCards={savedCards} cards={cards} loggedIn={loggedIn} />
        </ProtectedRoute>
        <ProtectedRoute path={paths.saved} loggedIn={loggedIn}>
          <Movies savedCards={savedCards} cards={cards} type="remove" loggedIn={loggedIn} />
        </ProtectedRoute>
        <ProtectedRoute path={paths.account} loggedIn={loggedIn}>
          <Profile handleSignOut={handleSignOut} loggedIn={loggedIn} />
        </ProtectedRoute>
        <Route component={NotFound} />
      </Switch>
    </CurrentUserProvider>
  );
}

export default App;
