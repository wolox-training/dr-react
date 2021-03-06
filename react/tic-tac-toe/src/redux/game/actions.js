import { completeTypes, createTypes, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';

import matchesService from '~services/MatchesService';

import localStorageService from '~services/LocalStorageService';

import ERRORS from '~constants/errors';

import { SET_SETTINGS, MATCHES_TARGET, SETTINGS_TARGET } from './constants';

export const actions = createTypes(completeTypes(['MATCHES'], ['SET_SETTINGS']), '@@GAME');

const actionsCreators = {
  getMatches: () => ({
    type: actions.MATCHES,
    target: MATCHES_TARGET,
    service: matchesService.getMatches,
    failureSelector: response => ERRORS[response.problem],
    injections: [
      withPostFailure((dispatch, response) => {
        throw new SubmissionError({ _error: ERRORS[response.problem] });
      })
    ]
  }),
  setGameSettings: value => dispatch => {
    localStorageService.setValue(SET_SETTINGS, value);
    dispatch({ type: actions.SET_SETTINGS, target: SETTINGS_TARGET, payload: value });
  }
};

export default actionsCreators;
