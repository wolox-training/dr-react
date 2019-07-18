import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '~assets/logo.svg';

import LoginForm from './components/LoginForm';

import authActions from '~redux/auth/actions';

import styles from './styles.module.scss';

class Login extends Component {
  handleSubmit = user => this.props.logIn(user);

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.container}>
          <img src={logo} alt="logo-wolox" className={styles.logo} />
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(authActions.logIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
