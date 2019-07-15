import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';
import Menu from './components/Menu';

import { ROUTES } from '~constants/routes';

function Navbar() {
  const { user } = useSelector(state => state.auth);
  const [menu, setMenu] = useState(false);

  const renderLinkItems = useCallback(
    ({ path, page }) => (
      <li key={page} className={styles.item}>
        <NavLink to={path} className={styles.link}>
          {page}
        </NavLink>
      </li>
    ),
    []
  );

  const handleClick = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {ROUTES && Object.values(ROUTES).map(renderLinkItems)}
          <li className={styles.item} onClick={handleClick}>
            {user}
          </li>
        </ul>
      </div>
      <Menu customClass={menu} />
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
