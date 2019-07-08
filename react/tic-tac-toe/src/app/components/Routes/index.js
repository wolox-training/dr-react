import React from 'react';
import { bool } from 'prop-types';
import { Switch } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import Game from '~screens/Game';

import Login from '~screens/Login';

function Routes({ authed }) {
  return (
    <Switch>
      <PublicRoute path="/login" authed={authed} exact component={Login} />
      <PrivateRoute authed={authed} exact path="/" component={Game} />
    </Switch>
  );
}

Routes.propTypes = {
  authed: bool
};

export default Routes;
