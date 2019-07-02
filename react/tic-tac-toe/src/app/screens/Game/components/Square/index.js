import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square({ onClick, position, value }) {
  const handleClick = useCallback(() => {
    onClick(position);
  }, [position]);

  return (
    <button type="button" className={styles.square} onClick={handleOnclick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number,
  value: PropTypes.string
};

export default Square;
