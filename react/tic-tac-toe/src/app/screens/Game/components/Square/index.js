import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

class Square extends PureComponent {
  handleOnclick = () => {
    const { onClick, position } = this.props;
    onClick(position);
  };

  render() {
    const { value } = this.props;
    return (
      <button type="button" className={styles.square} onClick={this.handleOnclick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number,
  value: PropTypes.string
};

export default Square;
