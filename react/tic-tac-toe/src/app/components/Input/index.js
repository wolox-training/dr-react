import React from 'react';
import cn from 'classnames';

import materialStyles from '../../../hoc';

function Input({ input, type, autocomplete, id, theme }) {
  return <input {...input} id={id} className={cn(theme)} autoComplete={autocomplete} type={type} />;
}
export default materialStyles(Input);
