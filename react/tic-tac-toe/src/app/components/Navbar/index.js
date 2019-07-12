import React from 'react';
import PropTypes from 'prop-types';

import Link from './components/Link';
import styles from './styles.module.scss';

const links = [
  {
    path: '/Home',
    page: 'Home'
  },
  {
    path: '/About',
    page: 'About'
  },
  {
    path: '/contactus',
    page: 'Contact us'
  },
  {
    path: '/game',
    page: 'Game'
  }
];

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {links &&
            links.map(({ path, page }, i) => <Link key={`${page}-${i + 1}`} page={page} path={path} />)}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
