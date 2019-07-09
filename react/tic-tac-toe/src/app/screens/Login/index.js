import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/logo.svg';

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
        <div className={styles.container}>
          <img src={logo} alt="logo-wolox" className={styles.logo} />
          <LoginForm onSubmit={this.handleOnSubmit} />
        </div>
        {this.props.error && (
          <>
            <h3>usuario ó contraseña inválidos</h3>
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  LogIn: user => dispatch(actionsCreators.logIn(user))
});

const mapStateToProps = ({ auth: { error } }) => ({ error });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
