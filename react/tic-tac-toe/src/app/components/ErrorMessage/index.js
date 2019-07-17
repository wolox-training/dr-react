import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Error } from '~assets/error.svg';

import styles from './styles.module.scss';

function ErrorMessage({ error }) {
  return (
    <div className={styles.container}>
      <Error className={styles.errorImg} />
      <h3 className={styles.error}>{error}</h3>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;
