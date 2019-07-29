import matchesService from '~services/MatchesService';

import localStorageService from '~services/LocalStorageService';

import { SubmissionError } from 'redux-form';

import ERRORS from '~constants/errors';

export const actions = {
  MATCHES: '@@GAME/MATCHES',
  MATCHES_SUCCESS: '@@GAME/MATCHES_SUCCESS',
  MATCHES_FAILURE: '@@GAME/MATCHES_FAILURE',
  SET_SETTINGS: '@@GAME/SET_SETTINGS'
};

const actionsCreators = {
  getMatches: () => async dispatch => {
    dispatch({ type: actions.MATCHES });
    const response = await matchesService.getMatches();
    if (response.ok) {
      dispatch({ type: actions.MATCHES_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.MATCHES_FAILURE, payload: ERRORS[response.problem] });
      throw new SubmissionError({ _error: ERRORS[response.problem] });
    }
  },
  setGameSettings: value => dispatch => {
    localStorageService.setValue(actions.SET_SETTINGS, value);
    dispatch({ type: actions.SET_SETTINGS, payload: value });
  }
};

export default actionsCreators;
