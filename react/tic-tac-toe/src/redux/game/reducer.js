import { completeReducer, createReducer } from 'redux-recompose';

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
  settings: localStorageService.getValue(actions.GAME_SETTIGNS) || initialSettings
};

const reducerDescription = {
  primaryActions: [actions.MATCHES],
  override: {
    [actions.GAME_SETTINGS]: (state, action) => ({ ...state, [action.target]: action.payload })
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
