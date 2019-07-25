import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';
import Menu from './components/Menu';

import { ROUTES } from '~constants/routes';

function Navbar() {
  const { user } = useSelector(state => state.auth);
  const [showMenu, setMenu] = useState(false);

  const handleClick = useCallback(() => {
    setMenu(!showMenu);
  }, [showMenu]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {Object.values(ROUTES).map(({ path, page }) => (
            <li key={page} className={styles.item}>
              <NavLink to={path} className={styles.link}>
                {page}
              </NavLink>
            </li>
          ))}
          <li className={styles.item} onClick={handleClick}>
            <h3 className={styles.link}>{user}</h3>
          </li>
        </ul>
      </div>
      <Menu showMenu={showMenu} />
    </nav>
  );
}

export default Navbar;
