import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '~screens/Home/screens/Game';

function Routes() {
  return (
    <Switch>
      <Route path="/game" exact component={Game} />
    </Switch>
  );
}

export default Routes;
