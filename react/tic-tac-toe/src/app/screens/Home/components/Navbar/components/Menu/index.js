import React, { useCallback } from 'react';
import { string } from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import authActions from '~redux/auth/actions';

import styles from './styles.module.scss';

function Menu({ customClass }) {
  const dispatch = useDispatch();
  const hanldeClick = useCallback(() => {
    dispatch(authActions.logOut());
  });

  return (
    <div className={cn(styles.container, { [styles.show]: customClass })}>
      <div className={styles.item} onClick={hanldeClick}>
        Sing out
      </div>
    </div>
  );
}

Menu.propTypes = {
  customClass: string
};

export default Menu;
