import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import { ROUTES } from '~constants/routes';

function Navbar() {
  const renderLinkItems = useCallback(({ path, page }) => (
    <li key={page} className={styles.item}>
      <NavLink to={path} className={styles.link}>
        {page}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {ROUTES && Object.values(ROUTES).map(renderLinkItems)}
          <li className={styles.item}>nombre</li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
