import React, { useState, useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import InputWrapper from '~components/InputWrapper';

import styles from './styles.module.scss';

import Button from '~components/Button';

import { SETTINGS_FIELDS } from '~constants/form';

const optionSelect = [
  { value: '👊🏽', label: '👊🏽' },
  { value: '👸🏽', label: '👸🏽' },
  { value: '🤟🏽', label: '🤟🏽' },
  { value: '❤️', label: '❤️' }
];

function SettingsForm({ handleSubmit }) {
  const [success, setSuccess] = useState(false);
  const handleClick = useCallback(() => setSuccess(!success));
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field
          component={InputWrapper}
          typeField="select"
          options={optionSelect}
          name={SETTINGS_FIELDS.PLAYER_ONE}
          label="Emoji P1"
          customStyles={styles.margin}
        />
        <Field
          component={InputWrapper}
          typeField="select"
          options={optionSelect}
          name={SETTINGS_FIELDS.PLAYER_TWO}
          label="Emoji P2"
          customStyles={styles.margin}
        />
        <Button type="submit" onClick={handleClick}>
          Save
        </Button>
      </form>
      {success && <h1>Se ha guardado correctamente</h1>}
    </>
  );
}

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm()(SettingsForm);
