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
    <>
      {loading ? (
        <Spinner name="double-bounce" />
      ) : (
        <ol>
          {matches &&
            matches.map(match => (
              <li className={styles.match} key={match.createdAt}>
                <h3 className={styles.player}>{`Jugador uno: ${match.player_one}`}</h3>
                <h3 className={styles.player}>{`Jugador dos: ${match.player_two}`}</h3>
                <h3 className={styles.winner}>{`Ganador: ${match.winner}`}</h3>
              </li>
            ))}
        </ol>
      )}
    </>
  );
}

export default Matches;
