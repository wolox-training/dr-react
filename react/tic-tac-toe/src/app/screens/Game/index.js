import React, { PureComponent } from 'react';

import { calculateWinner } from '../../../utils';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends PureComponent {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true
  };

  handleClick = i => {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([{ squares }]),
      xIsNext: !prevState.xIsNext
    }));
  };

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
