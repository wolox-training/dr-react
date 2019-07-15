import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '~redux/auth/actions';

import Routes from './components/Routes';

import '../scss/application.scss';

function App({ isAuthed, setUp }) {
  useEffect(() => {
    setUp();
  }, []);
  return (
    <Router>
      <Routes authed={isAuthed} />
    </Router>
  );
}
const mapStateToProps = ({ auth: { isAuthed } }) => ({ isAuthed });
const mapDispatchToProps = dispatch => ({
  setUp: () => dispatch(authActions.setUp())
});

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  setUp: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
