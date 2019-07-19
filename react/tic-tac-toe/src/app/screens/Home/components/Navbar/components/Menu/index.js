import React, { useCallback } from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import authActions from '~redux/auth/actions';

import styles from './styles.module.scss';

function Menu({ showMenu }) {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(authActions.logOut());
  });

  return (
    <div className={cn(styles.container, { [styles.show]: showMenu })}>
      <div className={styles.item} onClick={hanldeClick}>
        Sing out
      </div>
    </div>
  );
}

Menu.propTypes = {
  showMenu: bool
};

export default Menu;
