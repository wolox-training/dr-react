import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import { reducer as auth } from './auth/reducer';

export const history = createBrowserHistory();

const reducers = combineReducers({
  auth,
  form
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
export default store;
