import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '~components/Button';

import styles from './styles.module.scss';

function Square({ onClick, position, value }) {
  const handleClick = useCallback(() => {
    onClick(position);
  }, [position]);
  return (
    <Button type="button" onClick={handleClick} className={styles.square}>
      {value}
    </Button>
  );
}

Square.propTypes = {
  position: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Square;
