import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function Moves({ onClick, move }) {
  const desc = move ? `Go to move #${move}` : 'Go to game start';
  const handleClick = useCallback(() => {
    onClick(move);
  }, [move]);

  return (
    <li key={move}>
      <button type="button" onClick={handleClick}>
        {desc}
      </button>
    </li>
  );
}

Moves.propTypes = {
  move: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Moves;
