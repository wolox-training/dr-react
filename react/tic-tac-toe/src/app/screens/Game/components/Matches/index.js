import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import api from '~services/MatchesService';

import styles from './styles.module.scss';

class Matches extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.getMatches();
    }, 3000);
  }

  // recomendacioón de alejo
  parseResponse = response => {
    const { ok, data, problem, status } = response;
    if (ok) {
      return data;
    }
    throw new Error({ ...problem, ...status });
  };

  getMatches = async () => {
    try {
      const response = await api.getMatches();
      const data = this.parseResponse(response);
      this.setState({
        matches: data
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };

  render() {
    const { matches } = this.state;
    return (
      <Fragment>
        {matches.length ? (
          <ol>
            {matches.map(match => (
              <li className={styles.match} key={match.createdAt}>
                <h3 className={styles.player}>{`Jugador uno: ${match.player_one}`}</h3>
                <h3 className={styles.player}>{`Jugador dos: ${match.player_two}`}</h3>
                <h3 className={styles.winner}>{`Ganador: ${match.winner}`}</h3>
              </li>
            ))}
          </ol>
        ) : (
          <Spinner name="double-bounce" />
        )}
      </Fragment>
    );
  }
}

export default Matches;
