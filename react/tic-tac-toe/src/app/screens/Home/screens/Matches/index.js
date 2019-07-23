import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import gameActions from '~redux/game/actions';

import LayoutWithLoader from './layout';

function Matches() {
  const dispatch = useDispatch();
  const { matches, matchesLoading } = useSelector(state => state.game);

  useEffect(() => {
    dispatch(gameActions.getMatches());
  }, []);

  return <LayoutWithLoader matches={matches} loader={matchesLoading} />;
}
export default Matches;
