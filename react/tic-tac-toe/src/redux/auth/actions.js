import { SubmissionError } from 'redux-form';
import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';

import authService from '~services/AuthService';

import localStorageService from '~services/LocalStorageService';

import { setApiHeaders } from '~utils/setApiHeaders';

import ERRORS from '~constants/errors';

import { TOKE_TARGET, SESSION_USER } from './constants';

export const actions = createTypes(completeTypes(['LOGIN'], ['SET_VALUES']), '@@AUTH');

const actionsCreators = {
  logIn: user => ({
    type: actions.LOGIN,
    target: TOKE_TARGET,
    service: authService.login,
    payload: user,
    successSelector: response => response.data.token,
    failureSelector: response => ERRORS[response.problem],
    injections: [
      withPostSuccess((dispatch, response) => {
        setApiHeaders(response.data.token);
        localStorageService.setValue(SESSION_USER, {
          user: user.email,
          isAuthed: true,
          token: response.data.token
        });
        dispatch({
          type: actions.SET_VALUES,
          payload: { user: user.email, isAuthed: true }
        });
      }),
      withPostFailure((dispatch, response) => {
        throw new SubmissionError({ _error: ERRORS[response.problem] });
      })
    ]
  }),
  getLocalStorageValue: () => dispatch => {
    const session = localStorageService.getValue(SESSION_USER);
    if (session && session.isAuthed) {
      dispatch({
        type: actions.SET_VALUES,
        payload: { user: session.user, isAuthed: session.isAuthed }
      });
      setApiHeaders(session.token);
    }
  },
  logOut: () => dispatch => {
    dispatch({
      type: actions.SET_VALUES,
      payload: { user: null, isAuthed: false }
    });
    localStorageService.removeValue(SESSION_USER);
  }
};

export default actionsCreators;
