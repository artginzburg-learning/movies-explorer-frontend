import { Route, Switch } from 'react-router';

import Main from '../Main';
import Movies from '../Movies';
import NotFound from '../NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/movies" component={Movies} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
