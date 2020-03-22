import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./Store";
import styles from "./style.module.less";
class Login extends Component {
  render() {
    let { login, loginStatus } = this.props;
    return(
      <div className={styles['login-wrapper']}>312</div>
    )
  }
}
const mapState = state => {
  return {
    login: state.getIn(["login", "login"])
  };
};
const mapDispatch = dispatch => {
  return {
    loginStatus(accountElem, passwordElem) {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
  };
};
export default connect(mapState, mapDispatch)(Login);
