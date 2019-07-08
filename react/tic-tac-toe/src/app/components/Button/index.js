import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Button({ children, type, disabled }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
  type: 'button'
};
export default Button;
