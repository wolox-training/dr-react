import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string } from 'prop-types';

import Button from '~components/Button';

import Input from '~components/Input';

import ErrorMessage from '~components/ErrorMessage';

import styles from './styles.module.scss';

import { validate } from '~utils/validations';

function LoginForm({ handleSubmit, error }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field type="email" component={Input} name="email" autocomplete="off" label="Email address" />
      <Field type="password" component={Input} name="password" label="Enter your password" />
      {error && <ErrorMessage error={error} />}
      <Button type="submit" className={styles.button}>
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
