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
    case actions.AUTH_SUCCESS:
      return { isAuthed: true, loading: false, user: action.payload };
    case actions.AUTH_FAILURE:
      return { ...state, isAuthed: false, loading: false, error: action.payload };
    default:
      return state;
  }
}

export { reducer };
