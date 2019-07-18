import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string } from 'prop-types';

import Button from '~components/Button';

import InputWrapper from '~components/InputWrapper';

import ErrorMessage from '~components/ErrorMessage';

import styles from './styles.module.scss';

import { VALIDATION } from '~utils/validations';

const VALIDATIONS = {
  email: [VALIDATION.required, VALIDATION.email],
  password: [VALIDATION.required, VALIDATION.minLength(8)]
};

function LoginForm({ handleSubmit, error }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field
        type="email"
        typeField="input"
        component={InputWrapper}
        name="email"
        autocomplete="off"
        label="Email address"
        validate={VALIDATIONS.email}
      />
      <Field
        type="password"
        typeField="input"
        component={InputWrapper}
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
