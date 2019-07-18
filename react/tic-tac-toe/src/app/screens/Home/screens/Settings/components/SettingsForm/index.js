import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import InputWrapper from '~components/InputWrapper';

function SettingsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={InputWrapper} typeField="select" name="select" label="Select your emoji">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </Field>
      <Field type="text" typeField="input" component={InputWrapper} name="nickname" label="Nickname" />
    </form>
  );
}
SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default reduxForm({
  form: 'settings'
})(SettingsForm);
