import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import InputWrapper from '~components/InputWrapper';

import styles from './styles.module.scss';

import Button from '~components/Button';

const optionSelect = [
  { value: '👊🏽', label: '👊🏽' },
  { value: '👸🏽', label: '👸🏽' },
  { value: '🤟🏽', label: '🤟🏽' },
  { value: '❤️', label: '❤️' }
];

function SettingsForm({ handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field
        component={InputWrapper}
        typeField="select"
        options={optionSelect}
        name="player_one"
        label="Emoji P1"
        customStyles={styles.margin}
      />
      <Field
        component={InputWrapper}
        typeField="select"
        options={optionSelect}
        name="player_two"
        label="Emoji P2"
        customStyles={styles.margin}
      />
      <Button type="submit" disabled={false}>
        Save
      </Button>
    </form>
  );
}

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm()(SettingsForm);
