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
  loading: false,
  error: '',
  settings: localStorageService.getValue(actions.GAME_SETTIGNS) || initialSettings
};
(() => (
  console.log(actions.GAME_SETTIGNS), console.log(localStorageService.getValue(actions.GAME_SETTIGNS))
))();
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.MATCHES:
      return { ...state, loading: true };
    case actions.MATCHES_SUCCESS:
      return { ...state, loading: false, matches: action.payload };
    case actions.MATCHES_FAILURE:
      return { ...state, matches: [], loading: false, error: action.payload };
    case actions.GAME_SETTIGNS:
      return { ...state, settings: action.payload };
    default:
      return state;
  }
}

export { reducer };
