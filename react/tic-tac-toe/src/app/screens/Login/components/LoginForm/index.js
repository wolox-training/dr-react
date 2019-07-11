import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

import Input from '~components/Input';

import { ReactComponent as Logo } from '../../../../assets/error.svg';

import styles from './styles.module.scss';

import { validate } from '~utils/validations';

function LoginForm({ handleSubmit, error }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field type="text" component={Input} name="email" autocomplete="off" label="Email address" />
      <Field type="password" component={Input} name="password" label="Enter your password" />
      {error && (
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <h3 className={styles.error}>Incorrect email address or password.</h3>
        </div>
      )}
      <Button type="submit" className={cn(styles.button)}>
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'user',
  validate
})(LoginForm);
