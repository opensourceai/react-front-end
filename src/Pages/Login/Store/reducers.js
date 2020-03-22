import * as contants from './contants'
import { fromJS } from 'immutable'
const defaultState =fromJS({
    login: false,
    username: 'zaya'
}) 
export default (state = defaultState, action) => {
    switch (action.type) {
        case contants.CHANGE_LOGIN:
            return state.set('login',action.value);
        case contants.LOGOUT:
            return state.set('login',false);
        default:
            return state;
    }
}