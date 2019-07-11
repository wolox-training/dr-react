import { actions } from './actions';

const initialState = {
  matches: [],
  loading: false,
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.MATCHES:
      return { ...state, loading: true };
    case actions.MATCHES__SUCCESS:
      return { ...state, loading: false, matches: action.payload };
    case actions.MATCHES_FAILURE:
      return { ...state, matches: [], loading: false, error: action.payload };
    default:
      return state;
  }
}

export { reducer };
