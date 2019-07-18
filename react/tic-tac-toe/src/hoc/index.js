import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

function materialStyles(WrappedComponent) {
  return function HandleStyles({
    children,
    label,
    input,
    id,
    meta: { submitFailed, error, active },
    ...props
  }) {
    return (
      <div
        className={cn(styles.container, styles.border, {
          [styles.focused]: active,
          [styles.error]: submitFailed && error,
          [styles.hasValue]: !!input.value
        })}
      >
        <WrappedComponent {...props} input={input} theme={cn(styles.input)}>
          {children}
        </WrappedComponent>
        {label && (
          <label htmlFor={id} className={cn(styles.label)}>
            {label}
          </label>
        )}
        {submitFailed &&
          (error && error !== 'Required' && <span className={styles.messageError}>{error}</span>)}
      </div>
    );
  };
}

export default materialStyles;
