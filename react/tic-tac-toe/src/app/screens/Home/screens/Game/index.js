import React, { Component } from 'react';
import { connect } from 'react-redux';

import { calculateWinner } from '~utils/game';

import { settingsPropType } from '~constants/propTypes';

import styles from './styles.module.scss';
import Board from './components/Board';
import Moves from './components/Moves';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0
  };

  handleClick = i => {
    const { history, xIsNext, stepNumber } = this.state;
    const { settings } = this.props;
    const newHistoryEntry = history.slice(0, stepNumber + 1);
    const current = newHistoryPoint[newHistoryPoint.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? settings.player_one : settings.player_two;

    this.setState(prevState => ({
      history: newHistoryPoint.concat([{ squares }]),
      stepNumber: newHistoryPoint.length,
      xIsNext: !prevState.xIsNext
    }));
  };

  handleJumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  renderMoves = (_step, move) => <Moves key={`move-${move + 1}`} onClick={this.handleJumpTo} move={move} />;

  render() {
    const { settings } = this.props;
    const { history, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? settings.player_one : settings.player_two}`;

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{history.map(this.renderMoves)}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ settings: state.game.settings });

Game.propTypes = {
  settings: settingsPropType
};

export default connect(mapStateToProps)(Game);
