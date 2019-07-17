import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '~screens/Home/screens/Game';

import Matches from '~screens/Home/screens/Matches';

function Routes() {
  return (
    <Switch>
      <Route path="/game" exact component={Game} />
      <Route path="/matches" exact component={Matches} />
    </Switch>
  );
}

export default Routes;
