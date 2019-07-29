import React from 'react';
import cn from 'classnames';

function Select({ input, theme, options }) {
  return (
    <select {...input} className={cn(theme)}>
      {options &&
        options.map(opt => (
          <option key={opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
    </select>
  );
}

export default Select;
