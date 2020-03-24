import { combineReducers } from "redux-immutable";
import { reducer as loginReducer } from "../Pages/Login/Store";
const reducer = combineReducers({
  login: loginReducer
});
export default reducer;
