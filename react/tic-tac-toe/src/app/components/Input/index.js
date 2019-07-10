import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

function Input({ label, input, type, autocomplete, id, meta: { submitFailed, error, active } }) {
  return (
    <div className={styles.container}>
      <div
        className={cn(styles.border, { [styles.focus]: active, [styles.borderError]: submitFailed && error })}
      />
      <input
        {...input}
        id={id}
        autoComplete={autocomplete}
        className={cn(styles.input, {
          [styles.empty]: !!input.value
        })}
        type={type}
      />
      {label && (
        <label htmlFor={id} className={cn(styles.label, { [styles.labelError]: error })}>
          {label}
        </label>
      )}
      {submitFailed && (error && error !== 'Required' && <span className={styles.error}>{error}</span>)}
    </div>
  );
}
export default Input;
