import matchesService from '~services/MatchesService';

import { SubmissionError } from 'redux-form';

export const actions = {
  MATCHES: '@@GAME/MATCHES',
  MATCHES__SUCCESS: '@@GAME/MATCHES_SUCCESS',
  MATCHES_FAILURE: '@@GAME/MATCHES_FAILURE'
};

const actionsCreators = {
  getMatches: () => async dispatch => {
    dispatch({ type: actions.MATCHES });
    const response = await matchesService.getMatches();
    if (response.ok) {
      dispatch({ type: actions.MATCHES__SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.MATCHES_FAILURE, payload: response.problem });
      throw new SubmissionError({ _error: response.problem });
    }
  }
};

export default actionsCreators;
