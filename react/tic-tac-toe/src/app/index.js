import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '~redux/auth/actions';

import Routes from './components/Routes';
import Navbar from './components/Navbar';
import '../scss/application.scss';

function App({ isAuthed, setUp }) {
  useEffect(() => {
    setUp();
  }, []);
  return (
    <Router>
      <>
        <Navbar />
        <Routes authed={isAuthed} />
      </>
    </Router>
  );
}
const mapStateToProps = ({ auth: { isAuthed } }) => ({ isAuthed });
const mapDispatchToProps = dispatch => ({
  setUp: () => dispatch(actionsCreators.setUp())
});

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  setUp: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
