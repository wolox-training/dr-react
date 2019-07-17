import React, { Component } from 'react';

import { calculateWinner } from '~utils/game';

import styles from './styles.module.scss';
import Board from './components/Board';
import Moves from './components/Moves';
import Matches from './components/Matches';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0
  };

  handleClick = i => {
    const { history, xIsNext, stepNumber } = this.state;
    const newHistoryPoint = history.slice(0, stepNumber + 1);
    const current = newHistoryPoint[newHistoryPoint.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

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
    const { history, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{history.map(this.renderMoves)}</ol>
        </div>
        <div className={styles.gameInfo}>
          <div>Partidas</div>
          <Matches />
        </div>
      </div>
    );
  }
}

export default Game;
