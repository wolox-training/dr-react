import authService from '~services/AuthService';

import localStorageService from '~services/LocalStorageService';

import api from '~config/api';

export const actions = {
  AUTH: '@@AUTH/AUTH',
  AUTH__SUCCESS: '@@AUTH/AUTH_SUCCESS',
  AUTH_FAILURE: '@@AUTH/AUTH_FAILURE',
  SET_TOKEN: '@@AUTH/SET_TOKEN'
};

const actionsCreators = {
  setUp: () => dispatch => {
    const session = localStorageService.getValue(actions.AUTH);
    if (session && session.isAuthed) {
      dispatch({ type: actions.AUTH__SUCCESS, payload: session.email });
    } else {
      dispatch({ type: actions.AUTH_FAILURE });
    }
  },
  logIn: user => async dispatch => {
    dispatch({ type: actions.AUTH });
    const response = await authService.login(user);
    if (response.ok) {
      localStorageService.setValue(actions.AUTH, { email: user.email, isAuthed: true });
      dispatch({ type: actions.AUTH__SUCCESS, payload: user.email });
      api.setHeaders({
        Authorization: response.data.token
      });
    } else {
      dispatch({ type: actions.AUTH_FAILURE, payload: response.problem });
    }
  }
};

export default actionsCreators;
