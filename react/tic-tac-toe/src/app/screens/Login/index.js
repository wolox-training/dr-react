import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../../assets/logo.svg';

import LoginForm from './components/LoginForm';

import actionsCreators from '~redux/auth/actions';

import styles from './styles.module.scss';

class Login extends Component {
  handleOnSubmit = user => {
    this.props.LogIn(user);
  };

  render() {
    return (
      <div className={styles.login}>
        <img src={logo} alt="logo-wolox" className={styles.logo} />
        <LoginForm onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  LogIn: user => dispatch(actionsCreators.logIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
