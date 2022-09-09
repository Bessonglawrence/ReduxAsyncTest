import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;