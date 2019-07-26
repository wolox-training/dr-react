import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import gameActions from '~redux/game/actions';

import Layout from './layout';

function Matches() {
  const dispatch = useDispatch();
  const { matches, matchesLoading } = useSelector(state => state.game);

  useEffect(() => {
    dispatch(gameActions.getMatches());
  }, []);

  return <Layout matches={matches} loading={matchesLoading} />;
}
export default Matches;
