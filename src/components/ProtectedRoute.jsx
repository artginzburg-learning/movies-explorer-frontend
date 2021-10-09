import { Route, Redirect } from 'react-router-dom';

import { PATHS } from '../utils/constants';

const ProtectedRoute = (props) => (
  <Route path={props.path}>{props.loggedIn ? props.children : <Redirect to={PATHS.main} />}</Route>
);
export default ProtectedRoute;
