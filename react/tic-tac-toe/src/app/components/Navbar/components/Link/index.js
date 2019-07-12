import React from 'react';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Link({ page, path }) {
  return (
    <li className={styles.item}>
      <NavLink to={path} className={styles.link} activeClassName="menu__link--active">
        {page}
      </NavLink>
    </li>
  );
}

Link.propTypes = {
  page: string.isRequired,
  path: string.isRequired
};

export default Link;
