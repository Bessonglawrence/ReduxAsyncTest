import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

export default combineReducers({
    todoReducer,
    authReducer
})