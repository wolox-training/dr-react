import { completeReducer, createReducer, completeState, onReadValue } from 'redux-recompose';

import { actions } from './actions';

import localStorageService from '~services/LocalStorageService';

const SETTINGS_FIELDS = {
  PLAYER_ONE: 'player_one',
  PLAYER_TWO: 'player_two'
};

const initialSettings = {
  [SETTINGS_FIELDS.PLAYER_ONE]: '🤴🏽',
  [SETTINGS_FIELDS.PLAYER_TWO]: '👸🏽'
};

const initialStateDescription = {
  matches: [],
  settings: localStorageService.getValue(actions.SET_SETTINGS) || initialSettings
};

const reducerDescription = {
  primaryActions: [actions.MATCHES],
  override: {
    [actions.SET_SETTINGS]: onReadValue()
  }
};

const initialState = completeState(initialStateDescription, ['settings']);

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
