import { combineReducers } from "redux";

import authReducer from "./authReducer";
import todoReducers from "./TodoReducers";

export default combineReducers({
    authReducer,
    todoReducers
})