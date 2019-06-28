import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends PureComponent {
  renderSquare = i => <Square value={this.props.squares[i]} onClick={this.props.onClick} position={i} />;

  render() {
    return (
      <div>
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

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.any)
};

export default Board;
