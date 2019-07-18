import matchesService from '~services/MatchesService';

import { SubmissionError } from 'redux-form';

import ERRORS from '~constants/errors';

export const actions = {
  MATCHES: '@@GAME/MATCHES',
  MATCHES_SUCCESS: '@@GAME/MATCHES_SUCCESS',
  MATCHES_FAILURE: '@@GAME/MATCHES_FAILURE'
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
  }
};

export default actionsCreators;
