import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Input({ label, input, type, placeholder, id }) {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...input} id={id} placeholder={placeholder} className={styles.input} type={type} />
    </div>
  );
}

Input.propTypes = {};

export default Input;
