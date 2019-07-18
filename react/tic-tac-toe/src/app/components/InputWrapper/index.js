import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

import FIELDS from '~constants/fieldComponentsArray';

function InputWrapper({
  typeField,
  customStyles,
  label,
  input,
  id,
  meta: { submitFailed, error, active },
  ...props
}) {
  const FieldComponent = FIELDS[typeField];
  return (
    <div
      className={cn(styles.container, styles.border, customStyles, {
        [styles.focused]: active,
        [styles.error]: submitFailed && error,
        [styles.hasValue]: !!input.value
      })}
    >
      <FieldComponent {...props} input={input} theme={cn(styles.input)} />
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

export default InputWrapper;
