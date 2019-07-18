import React from 'react';
import cn from 'classnames';

function Select({ input, theme, options, id }) {
  return (
    <select {...input} id={id} className={cn(theme)}>
      {options &&
        options.map(opt => (
          <option key={opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
    </select>
  );
}
Select.propTypes = {};

export default Select;
