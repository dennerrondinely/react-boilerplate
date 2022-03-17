import { Switch } from 'react-router-dom';

import Home from 'pages/Home';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact isPrivate />
  </Switch>
);

export default Routes;
