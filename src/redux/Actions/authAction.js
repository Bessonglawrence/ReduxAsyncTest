import { LOGIN_SUCCESS, LOGOUT } from "./actionTypes";
import authService from "../../AuthService/authService";

export const login = (user) =>(dispatch) =>{
    return authService
    .logIn(user)
    .then(
        (response) =>{
            if(response.status === "success"){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user : response.user}
                });
    Promise.resolve();
                return response;
            }
        },
        (error) => {
            const message = error.toString();
    Promise.reject();
                return message;
        }
    );
}

export const logout = () => (dispatch) =>{
    return authService
    .logOut()
    .then(
        (response) =>{
            if(response.status === "success"){
                dispatch({
                    type: LOGOUT
                });
                Promise.resolve();
                return response;
            }
        }
    )
}