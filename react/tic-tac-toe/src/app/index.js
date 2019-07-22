import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import authActions from '~redux/auth/actions';

import Routes from './components/Routes';

import '../scss/application.scss';

function App() {
  const { isAuthed } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getLocalStorageValue());
  }, []);

  return (
    <Router>
      <Routes authed={isAuthed} />
    </Router>
  );
}

export default App;
