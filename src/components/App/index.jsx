import { Route, Switch } from 'react-router';

import Main from '../Main';
import Movies from '../Movies';
import NotFound from '../NotFound';

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
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/movies">
        <Movies cards={cardsFound} />
      </Route>
      <Route path="/saved-movies">
        <Movies cards={cardsSaved} type="remove" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
