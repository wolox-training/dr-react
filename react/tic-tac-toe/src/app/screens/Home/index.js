import React from 'react';

import Routes from './components/Routes';
import Navbar from './components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

Home.propTypes = {};

export default Home;
