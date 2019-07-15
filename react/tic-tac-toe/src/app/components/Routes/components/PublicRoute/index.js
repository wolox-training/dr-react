import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, authed, ...rest }) {
  const renderComponent = useCallback(props => (authed ? <Redirect to="/game" /> : <Component {...props} />));
  return <Route {...rest} render={renderComponent} />;
}

PublicRoute.propTypes = {
  authed: PropTypes.bool.isRequired,
  component: PropTypes.elementType
};

export default PublicRoute;
