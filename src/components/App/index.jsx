import { useCallback, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import { apiDomain, paths } from '../../utils/constants';
import scrollToTop from '../../utils/scrollToTop';

import mainApi from '../../utils/MainApi';

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

  const [savedCards, setSavedCards] = useStateWithLocalStorage('savedCards', []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then(setCurrentUser)
        .catch((err) => console.log('Couldnt get user info from the server', err));
      mainApi
        .getMovies()
        .then(setSavedCards)
        .catch((err) => console.log('Couldnt get saved cards from the server', err));
    }
  }, [loggedIn, setCurrentUser, setSavedCards]);

  const handleCardDelete = useCallback(
    (card) => {
      const oldSavedCards = savedCards;

      const cardToDelete = card.id ? savedCards.find((c) => c.movieId === String(card.id)) : card;

      setSavedCards(
        savedCards.filter((c) => (card.id ? c.movieId !== String(card.id) : c._id !== card._id)),
      );

      return mainApi.deleteMovie(cardToDelete._id).catch((error) => {
        setSavedCards(oldSavedCards);
        console.log('Couldnt delete card on the server', error);
      });
    },
    [savedCards, setSavedCards],
  );

  async function handleCardSave(card) {
    const oldSavedCards = savedCards;

    const cardToSave = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://${apiDomain}${card.image.url}`,
      trailer: card.trailerLink,
      thumbnail: `https://${apiDomain}${card.image.formats.thumbnail.url}`,
      movieId: String(card.id),
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    };

    setSavedCards([cardToSave, ...savedCards]);

    try {
      const newCard = await mainApi.saveMovie(cardToSave);
      setSavedCards([newCard, ...savedCards]);
      return newCard;
    } catch (error) {
      setSavedCards(oldSavedCards);
      console.error(error);
    }
  }

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
        }
      })
      .catch((err) => {
        setLoggedIn(false);

        console.log(err);
      });
  }, [handleLogin, setLoggedIn]);

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
          history.push(paths.search);
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
        history.replace(paths.main);
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
          <Movies
            onCardSave={handleCardSave}
            onCardDelete={handleCardDelete}
            savedCards={savedCards}
            loggedIn={loggedIn}
          />
        </ProtectedRoute>
        <ProtectedRoute path={paths.saved} loggedIn={loggedIn}>
          <Movies
            onCardSave={handleCardSave}
            onCardDelete={handleCardDelete}
            savedCards={savedCards}
            type="remove"
            loggedIn={loggedIn}
          />
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
