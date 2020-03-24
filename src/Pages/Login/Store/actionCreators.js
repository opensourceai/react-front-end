import * as contants from "./contants";
import axios from "axios";

/**登录 */
export const login = (account, password) => {
  return dispatch => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch({
            type: contants.CHANGE_LOGIN,
            value: true
          });
        } else {
          alert("登录失败");
        }
      });
  };
};
/**改变验证码 */
export const handleCode = code => {
  return dispatch => {
    dispatch({
      type: contants.CHANGE_CODE,
      value: code
    });
  };
};
