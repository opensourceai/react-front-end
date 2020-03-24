import * as contants from "./contants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  code: Math.random()
    .toString(16)
    .slice(2, 6)
    .toUpperCase()
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_CODE:
      return state.set("code", action.value);
    case contants.CHANGE_LOGIN:
      return state.set("login", false);
    default:
      return state;
  }
};
