import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../Actions/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const user = AsyncStorage.getItem("user");
const INITIAL_STATE = user 
? 
{isLoggedIn: true, user}
:
{isLoggedIn: false, user: null}

const authReducer = ( state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch(type){
    case LOGIN_SUCCESS:
        return{
            ...state,
            isLoggedIn: true,
            user: payload.user,
        };
    case LOGOUT:
        return{
            ...state,
            isLoggedIn: false,
            user: null
        };
    default:
        return state;
  }

}

export default authReducer