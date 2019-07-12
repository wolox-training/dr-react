import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import actionsCreators from '~redux/auth/actions';

import Routes from './components/Routes';
import '../scss/application.scss';

function App() {
  const { isAuthed } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCreators.setUp());
  }, []);

  return (
    <Router>
      <Routes authed={isAuthed} />
    </Router>
  );
}

export default App;
