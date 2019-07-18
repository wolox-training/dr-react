import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, authed, ...rest }) {
  const render = useCallback(props => (authed ? <Component {...props} /> : <Redirect to="/" />));
  return <Route {...rest} render={render} />;
}

PrivateRoute.propTypes = {
  authed: PropTypes.bool.isRequired,
  component: PropTypes.elementType
};

export default PrivateRoute;
