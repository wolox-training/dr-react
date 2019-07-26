import { SubmissionError } from 'redux-form';
import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';

import authService from '~services/AuthService';

import localStorageService from '~services/LocalStorageService';

import { setApiHeaders } from '~utils/api';

import ERRORS from '~constants/errors';

import { TOKEN_TARGET, USER_SESSION } from './constants';

export const actions = createTypes(completeTypes(['LOGIN'], ['SET_VALUES']), '@@AUTH');

const actionsCreators = {
  logIn: user => ({
    type: actions.LOGIN,
    target: TOKEN_TARGET,
    service: authService.login,
    payload: user,
    successSelector: response => response.data.token,
    failureSelector: response => ERRORS[response.problem],
    injections: [
      withPostSuccess((dispatch, response) => {
        setApiHeaders(response.data.token);
        localStorageService.setValue(USER_SESSION, {
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
    const session = localStorageService.getValue(USER_SESSION);
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
    localStorageService.removeValue(USER_SESSION);
  }
};

export default actionsCreators;
