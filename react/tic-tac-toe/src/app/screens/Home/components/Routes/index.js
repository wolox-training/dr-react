import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '~constants/routes';

import Game from '~screens/Home/screens/Game';

import Matches from '~screens/Home/screens/Matches';

import Settings from '~screens/Home/screens/Settings';

function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.game.path} exact component={Game} />
      <Route path={ROUTES.matches.path} exact component={Matches} />
      <Route path={ROUTES.settings.path} exact component={Settings} />
    </Switch>
  );
}

export default Routes;
