import React from 'react';
import cn from 'classnames';

function Input({ input, type, autocomplete, id, theme }) {
  return <input {...input} id={id} className={cn(theme)} autoComplete={autocomplete} type={type} />;
}
export default Input;
