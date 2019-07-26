import React from 'react';
import { arrayOf } from 'prop-types';

import styles from './styles.module.scss';

import withLoader from '~components/WithLoader';

import { matchPropType } from '~constants/propTypes';

function Layout({ matches }) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

Layout.propTypes = {
  matches: arrayOf(matchPropType)
};

export default withLoader(Layout);
