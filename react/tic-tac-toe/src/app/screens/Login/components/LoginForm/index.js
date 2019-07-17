import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string } from 'prop-types';

import Button from '~components/Button';

import Input from '~components/Input';

import ErrorMessage from '~components/ErrorMessage';

import styles from './styles.module.scss';

import { VALIDATION } from '~utils/validations';

const VALIDATIONS = {
  email: [VALIDATION.required, VALIDATION.email],
  password: [VALIDATION.required, VALIDATION.minLengthEight]
};

function LoginForm({ handleSubmit, error }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field
        type="email"
        component={Input}
        name="email"
        validate={VALIDATIONS.email}
        autocomplete="off"
        label="Email address"
      />
      <Field
        type="password"
        component={Input}
        name="password"
        validate={VALIDATIONS.password}
        label="Enter your password"
      />
      <ErrorMessage error={error} />
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
  form: 'user'
})(LoginForm);
