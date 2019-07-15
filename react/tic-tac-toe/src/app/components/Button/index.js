import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

function Button({ children, type, disabled, className }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} disabled={disabled} className={cn(styles.button, className )}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
  type: 'button'
};
export default Button;
