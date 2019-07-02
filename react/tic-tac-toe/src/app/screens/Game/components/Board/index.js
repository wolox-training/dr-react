import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends PureComponent {
  state = {
    ArrayCells: [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  };

  renderRows = () =>
    this.state.ArrayCells.map((cells, idx) => (
      <div key={`row-${idx + 1}`} className={styles.boardRow}>
        {cells.map(cell => this.renderSquare(cell))}
      </div>
    ));

  renderSquare = i => (
    <Square key={`cell-${i + 1}`} value={this.props.squares[i]} onClick={this.props.onClick} position={i} />
  );

  render() {
    return <div>{this.renderRows()}</div>;
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.any)
};

export default Board;
