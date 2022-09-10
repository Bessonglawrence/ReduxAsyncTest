import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';


const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () =>{
  return(
    <NavigationContainer>
      <Navigator initialRouteName='Login' >
        <Screen screenOptions={{headerShown: false}} name='onboarding' component={OnboardingScreen} />
        <Screen name='Login' component={LoginScreen} screenOptions={{headerShown: false}} />
        <Screen name='Register' component={RegisterScreen} />
        <Screen name='Home' component={Home}/>
        <Screen name='Error' component={Error}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;