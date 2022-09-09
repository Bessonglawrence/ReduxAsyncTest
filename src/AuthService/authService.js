import AsyncStorage from "@react-native-async-storage/AsyncStorage";

const logIn = async (user) =>{
    const { username, password } = user;
    if(username === "Lawrence" && password === "password"){
        AsyncStorage.setItem("user", JSON.stringify(user))
        return{
            status: 'success',
            message: 'You have been logged In',
            user: username
        }
    }

};

const logOut = async () =>{
    AsyncStorage.clear()
    return{
        status: 'success',
        message: 'You have been logged Out'
    }
}

export default {
    logIn,
    logOut
};