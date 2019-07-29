import { completeReducer, createReducer, onSpreadValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  user: null,
  isAuthed: false,
  token: null
};

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.SET_VALUES]: onSpreadValue()
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
