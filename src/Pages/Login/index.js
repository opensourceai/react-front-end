import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Bind } from "lodash-decorators";
import { connect } from "react-redux";
import { Row, Form, Input, Col, Checkbox } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { actionCreators } from "./Store";
import styles from "./style.module.less";
import LoginBack from "../../Static/assets/Login/login.jpg";
import LoginBox from "../../Static/assets/Login/loginwrapper.png";
import SubmitButton from "../../Static/assets/Login/submitButton.png";

class Login extends Component {
  form = React.createRef();
  @Bind()
  checkAccount(rule, value, callback) {
    const { code } = this.props;
    if (value === code) {
      callback();
    } else {
      callback("验证码错误");
    }
  }
  render() {
    const { code, handleLogin, handleCode } = this.props;
    const backStyle = {
      background: `url(${LoginBack}) no-repeat`,
      backgroundSize: "cover"
    };
    const loginBox = {
      background: `url(${LoginBox})`,
      backgroundSize: "cover"
    };
    const submitButton = {
      background: `url(${SubmitButton})`,
      backgroundSize: "cover"
    };
    return (
      <div className={styles["login-wrapper"]} style={backStyle}>
        <div className="login-box" style={loginBox}>
          <GithubOutlined
            className="github"
            style={{ fontSize: 48, color: "#000" }}
          />
          <div className="title">
            <img
              src={require("../../Static/assets/Login/title.png")}
              width={300}
              alt="img"
            />
          </div>
          <Form className="form-wrapper" ref={this.form}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]}
            >
              <Input placeholder="用户名" className="user" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!"
                }
              ]}
            >
              <Input type="password" placeholder="登录密码" className="pw" />
            </Form.Item>
            <Row gutter={12}>
              <Col span={16}>
                <Form.Item
                  name="code"
                  rules={[{ validator: this.checkAccount }]}
                >
                  <Input placeholder="验证码" className="code" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <div className="code-wrapper" onClick={handleCode}>
                  {code}
                </div>
              </Col>
            </Row>
            <div
              className="submit-button"
              onClick={() => handleLogin(this.form.current)}
              style={submitButton}
              htmlType="submit"
            >
              <span className="login">登录</span>
              <span className="regist">注册</span>
            </div>
            <Row>
              <Col span={18}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>14天内自动登录</Checkbox>
                </Form.Item>
              </Col>
              <Col span={6} style={{ textAlign: "right" }}>
                <a className="login-form-forgot">忘记密码</a>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    code: state.getIn(["login", "code"])
  };
};
const mapDispatch = dispatch => {
  return {
    handleCode() {
      const newCode = Math.random()
        .toString(16)
        .slice(2, 6)
        .toUpperCase();
      dispatch(actionCreators.handleCode(newCode));
    },
    handleLogin(form) {
      form
        .validateFields()
        .then(values => {
          const { username, password } = values;
          dispatch(actionCreators.login(username, password));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
export default connect(mapState, mapDispatch)(Login);
