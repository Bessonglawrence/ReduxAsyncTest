import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
//import authReducer from '../redux/Reducers/authReducer';
import combineReducers from "./Reducers/combineReducers";
const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;