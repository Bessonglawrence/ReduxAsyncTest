import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React,{useState} from 'react'
import Button from '../../components/Button';
import GreyButton from '../../components/GreyButton';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Actions/authAction';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const {forgotText, icons, orSection, orViews,  main, headerText, imageStyle, texInputStyle, inputSection} = styles;

  const onLogin = () =>{
    let user = {
        username: username,
        password: password,
    }
    dispatch(login(user))
    .then((response) =>{
      if(response.status === "success"){
        navigation.replace("Home");
      }
    })
    .catch((error) =>{
      navigation.replace('Error')
    })
  }

  return (
  
      <KeyboardAvoidingView 
        style={{flex: 1, marginBottom: 20}} 
        behavior='padding'
        keyboardVerticalOffset={25}

      >
        <View style={main}>
        <Image style={imageStyle}  source={require('../../images/handShake.png')} />
        <Text style={headerText}>Login</Text>

        <View style={inputSection}>
          <Icon name='account-circle' size={30} color='grey' style={icons}/>
          <TextInput 
            style={texInputStyle} 
            placeholder='E.g John Doe' 
            placeholderTextColor='grey' 
            underlineColorAndroid='#e4e5e5'
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={inputSection}>
          <Icon name='lock' size={30} color='grey' style={icons}/>
          <TextInput 
            style={texInputStyle} 
            placeholder='Password' 
            placeholderTextColor='grey' 
            underlineColorAndroid='#e4e5e5'
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity>
          <Text style={forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button buttonText='Login' onPress={() => onLogin()}/>

        <View style={orSection}>
          <View style={orViews}></View>
            <Text style={{color: 'grey', marginHorizontal: 15, fontWeight: '500',}}>OR</Text>
          <View style={orViews}></View>
        </View>

        <GreyButton />
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
          <Text style={{color: 'grey', fontSize: 16, fontStyle: 'italic'}}>New here?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#3c84db', fontSize: 16, fontWeight: '500', marginLeft: 10}}>Register</Text>
          </TouchableOpacity>
        </View>

        </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white', 
    flex: 1,
    paddingHorizontal: 20
  },
  headerText:{
    marginVertical: 15,
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  imageStyle:{
    height: 180,
    width: 290,
    marginTop: 40,
    alignSelf: 'center'
  },
  texInputStyle:{
    fontSize: 18,
    width: 250,
    paddingTop: 5,
    marginBottom: 5,
    fontStyle: 'italic',
    color: 'grey'
  },
  inputSection:{
    flexDirection: 'row',
    marginBottom: 6
  },
  forgotText:{
    color: '#1393ec', 
    fontWeight: '600', 
    alignSelf: 'flex-end', 
    marginVertical: 2
  },
  orSection:{
    flexDirection: 'row', 
    alignSelf: 'center', 
    marginVertical: 16
  },
  orViews:{
    borderBottomWidth: 1.5, 
    borderColor: 'lightgrey', 
    width: 120, 
    marginBottom: 8
  },
  icons:{
    marginRight: 15, 
    marginTop: 8
  }
})