import { Switch } from 'react-router-dom';

import CustomRoute from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Chat from '../pages/Chat';

function AppRoutes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Login} />
      <CustomRoute path="/register" exact component={Register} />
      <CustomRoute path="/chat" exact component={Chat} isPrivate />
    </Switch>
  );
}

export default AppRoutes;
