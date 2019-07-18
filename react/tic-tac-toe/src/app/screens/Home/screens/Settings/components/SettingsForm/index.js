import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Select from '~components/Select';

function SettingsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={Select} name="select" label="Select your emoji">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </Field>
    </form>
  );
}
SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default reduxForm({
  form: 'settings'
})(SettingsForm);
