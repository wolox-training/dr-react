import React from 'react';
import PropTypes from 'prop-types';

import { ArrayCells } from '~constants/array';

import Square from '../Square';

import styles from './styles.module.scss';

function Board({ squares, onClick }) {
  return (
    <>
      {ArrayCells.map((cells, idx) => (
        <div key={`row-${idx + 1}`} className={styles.boardRow}>
          {cells.map(j => (
            <Square key={`cell-${idx + 1}-${j}`} value={squares[j]} onClick={onClick} position={j} />
          ))}
        </div>
      ))}
    </>
  );
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string)
};

export default Board;
