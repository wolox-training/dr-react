import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

function Input({ label, input, type, autocomplete, id, meta: { submitFailed, error, active } }) {
  return (
    <div
      className={cn(styles.container, styles.border, {
        [styles.focused]: active,
        [styles.error]: submitFailed && error,
        [styles.hasValue]: !!input.value
      })}
    >
      <input {...input} id={id} autoComplete={autocomplete} className={cn(styles.input)} type={type} />
      {label && (
        <label htmlFor={id} className={cn(styles.label)}>
          {label}
        </label>
      )}
      {submitFailed &&
        (error && error !== 'Required' && <span className={styles.messageError}>{error}</span>)}
    </div>
  );
}
export default Input;
