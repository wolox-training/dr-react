import { completeReducer, createReducer, onReadValue } from 'redux-recompose';

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

const initialState = {
  matches: [],
  settings: localStorageService.getValue(actions.SET_SETTINGS) || initialSettings
};

const reducerDescription = {
  primaryActions: [actions.MATCHES],
  override: {
    [actions.SET_SETTINGS]: onReadValue()
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
