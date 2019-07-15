import { actions } from './actions';

const initialState = {
  user: '',
  isAuthed: false,
  loading: false,
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, loading: true };
    case actions.AUTH__SUCCESS:
      return { isAuthed: true, loading: false, user: action.payload };
    case actions.AUTH_FAILURE:
      return { ...state, isAuthed: false, loading: false, error: action.payload };
    case actions.LOG_OUT:
      return { ...state, isAuthed: false };
    default:
      return state;
  }
}

export { reducer };
