import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

function Square({ onClick, position, value }) {
  const handleClick = useCallback(() => {
    onClick(position);
  }, [position]);
  return (
    <button
      type="button"
      className={cn(styles.square, { [styles.nextPlayer]: value === 'X' })}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  position: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Square;
