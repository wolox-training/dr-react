/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsForm from './components/SettingsForm';

import gameActions from '~redux/game/actions';

import styles from './styles.module.scss';

function Settings() {
  const dispatch = useDispatch();
  const handleSubmit = user => dispatch(gameActions.setGameSettings(user));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Configuración de jugadores</h1>
      <SettingsForm form="players" onSubmit={handleSubmit} />
    </div>
  );
}

export default Settings;
