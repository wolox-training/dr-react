import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '~screens/Home/screens/Game';

import Matches from '~screens/Home/screens/Matches';

import Settings from '~screens/Home/screens/Settings';

function Routes() {
  return (
    <Switch>
      <Route path="/game" exact component={Game} />
      <Route path="/matches" exact component={Matches} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  );
}

export default Routes;
