import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, authed, ...rest }) {
  const renderComponent = useCallback(props =>
    authed === false ? <Component {...props} /> : <Redirect to="/game" />
  );
  return <Route {...rest} render={renderComponent} />;
}

PublicRoute.propTypes = {
  authed: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default PublicRoute;
