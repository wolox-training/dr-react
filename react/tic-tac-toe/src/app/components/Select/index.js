import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import materialStyles from '../../../hoc';

function Select({ input, children, theme }) {
  return (
    <select {...input} className={cn(theme)}>
      {children}
    </select>
  );
}
Select.propTypes = {};

export default materialStyles(Select);
