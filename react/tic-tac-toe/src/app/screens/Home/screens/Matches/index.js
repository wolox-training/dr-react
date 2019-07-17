import React, { useEffect } from 'react';
import Spinner from 'react-spinkit';
import { useSelector, useDispatch } from 'react-redux';

import gameActions from '~redux/game/actions';

import styles from './styles.module.scss';

function Matches() {
  const dispatch = useDispatch();
  const { loading, matches } = useSelector(state => state.game);

  useEffect(() => {
    dispatch(gameActions.getMatches());
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner name="double-bounce" />
      ) : (
        <ol className={styles.matches}>
          {matches &&
            matches.map(match => (
              <li className={styles.match} key={match.createdAt}>
                <h3 className={styles.player}>
                  Jugador uno: <span>{match.player_one}</span>
                </h3>
                <h3 className={styles.player}>
                  Jugador dos: <span>{match.player_two}</span>
                </h3>
                <h3 className={styles.winner}>
                  Ganador: <span>{match.winner}</span>
                </h3>
              </li>
            ))}
        </ol>
      )}
    </div>
  );
}

export default Matches;
