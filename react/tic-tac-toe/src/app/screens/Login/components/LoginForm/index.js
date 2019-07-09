import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, bool } from 'prop-types';

import Button from '~components/Button';

import Input from '~components/Input';

import styles from './styles.module.scss';

import { validate } from '~utils/validations';

function LoginForm({ handleSubmit, valid }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field type="text" component={Input} name="email" autocomplete="off" placeholder="Email Address *" />
      <Field type="password" component={Input} name="password" placeholder="Password *" />
      <Button type="submit" disabled={!valid}>
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  valid: bool.isRequired
};

export default reduxForm({
  form: 'user',
  validate
})(LoginForm);
