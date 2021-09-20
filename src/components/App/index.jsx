import { Route, Switch } from 'react-router';

import Main from '../Main';
import Movies from '../Movies';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/movies" component={Movies} />
    </Switch>
  );
}

export default App;
