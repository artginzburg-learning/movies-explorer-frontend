import { useCallback, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import { paths } from '../../utils/constants';
import scrollToTop from '../../utils/scrollToTop';

import useStateWithLocalStorage from '../../hooks/useStateWithLocalStorage';
import useStateWithBase64 from '../../hooks/useStateWithBase64';

import Authentication from '../Authentication';
import Main from '../Main';
import Movies from '../Movies';
import NotFound from '../NotFound';
import Profile from '../Profile';

const cardsFound = [
  {
    name: 'Banksy Most Wanted',
    duration: 1,
    img: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    added: true,
  },
  {
    name: 'В погоне за Бэнкси',
    duration: 228,
    img: 'https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558',
  },
  {
    name: 'Это погоня, крч',
    duration: 103,
    img: 'https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg',
  },
  {
    name: 'Banksy Most Wanted',
    duration: 1,
    img: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    added: true,
  },
  {
    name: 'В погоне за Бэнкси',
    duration: 228,
    img: 'https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558',
  },
  {
    name: 'Это погоня, крч',
    duration: 103,
    img: 'https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg',
  },
  {
    name: 'Banksy Most Wanted',
    duration: 1,
    img: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    added: true,
  },
  {
    name: 'В погоне за Бэнкси',
    duration: 228,
    img: 'https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558',
  },
  {
    name: 'Это погоня, крч',
    duration: 103,
    img: 'https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg',
  },
  {
    name: 'Banksy Most Wanted',
    duration: 101,
    img: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    added: true,
  },
  {
    name: 'В погоне за Бэнкси',
    duration: 228,
    img: 'https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558',
  },
  {
    name: 'Это погоня, крч',
    duration: 103,
    img: 'https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg',
  },
  {
    name: 'Banksy Most Wanted',
    duration: 1,
    img: 'https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380',
    added: true,
  },
  {
    name: 'В погоне за Бэнкси',
    duration: 228,
    img: 'https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558',
  },
  {
    name: 'Это погоня, крч',
    duration: 103,
    img: 'https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg',
  },
];

const cardsSaved = cardsFound.filter((card) => card.added);

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useStateWithLocalStorage('loggedIn', false);
  const [email, setEmail] = useStateWithBase64('email', '');

  const user = {
    name: 'Артур',
    email,
  };

  const handleLogin = useCallback(
    (email) => {
      setEmail(email);
      setLoggedIn(true);
    },
    [setEmail, setLoggedIn],
  );

  const handleTokenCheck = useCallback(() => {
    if (localStorage.token) {
      handleLogin(email);
    } else {
      setLoggedIn(false);
    }
  }, [email, handleLogin, setLoggedIn]);

  function handleSubmitRegister(e_, email, password) {
    return new Promise((resolve, reject) => {
      history.replace(paths.login);

      resolve();
    });
  }

  function handleSubmitLogin(e, email, password) {
    if (!email || !password) {
      return;
    }

    return new Promise((resolve, reject) => {
      e.target.reset();

      localStorage.token = Math.random();

      handleLogin(email);
      history.push(paths.search);

      resolve();
    });
  }

  function handleSignOut() {
    delete localStorage.token;
    setLoggedIn(false);
    history.replace(paths.main);
    scrollToTop();
  }

  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  return (
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
      <Route path={paths.search}>
        <Movies cards={cardsFound} loggedIn={loggedIn} />
      </Route>
      <Route path={paths.saved}>
        <Movies cards={cardsSaved} type="remove" loggedIn={loggedIn} />
      </Route>
      <Route path={paths.account}>
        <Profile user={user} handleSignOut={handleSignOut} loggedIn={loggedIn} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
