import React from 'react';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

function withLoader(WrappedComponent) {
  return function Loader({ loading, ...props }) {
    if (loading) {
      return (
        <div className={styles.container}>
          <Spinner name="double-bounce" fadeIn="none" />
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
}

export default withLoader;
