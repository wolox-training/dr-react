import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

function Input({ label, input, type, placeholder, autocomplete, id, meta: { touched, error, active } }) {
  return (
    <div className={styles.container}>
      <div className={cn(styles.border, { [styles.focus]: active })} />
      <input
        {...input}
        id={id}
        autoComplete={autocomplete}
        className={cn(styles.input, {
          [styles.emty]: !!input.value
        })}
        type={type}
      />
      {placeholder && (
        <label htmlFor={id} className={cn(styles.label, { [styles.labelError]: error })}>
          {placeholder}
        </label>
      )}
      {touched && (error && <span className={styles.error}>{error}</span>)}
    </div>
  );
}

Input.propTypes = {};

export default Input;
