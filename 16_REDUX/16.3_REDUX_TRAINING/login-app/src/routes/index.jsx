import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ClientDashboard from '../pages/ClientDashboard';
import Login from '../pages/Login';
import RegisterClient from '../pages/RegisterClient';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={ClientDashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register-clients" component={RegisterClient} />
    </Switch>
  )
}

export default Routes;
