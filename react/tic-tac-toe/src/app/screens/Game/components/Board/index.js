import React, { Component } from 'react';

import Square from '../Square';
import { calculateWinner } from '../../../../../utils';

import styles from './styles.module.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick = i => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({ squares, xIsNext: !prevState.xIsNext }));
  };

  renderSquare = i => <Square value={this.state.squares[i]} onClick={this.handleClick} position={i} />;

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
