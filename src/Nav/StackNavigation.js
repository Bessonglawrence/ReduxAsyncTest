import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Home from '../screens/Home/Home';
import Error from '../screens/Error/Error';
import Profile from '../screens/Profile/Profile';


const {Navigator, Screen} = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () =>{
  return(
    <NavigationContainer>
      <Navigator initialRouteName='Login' >
        <Screen 
          options={{headerShown: false}} 
          name='onboarding' 
          component={OnboardingScreen} 
        />
        <Screen 
          options={{headerShown: false}} 
          name='Login' 
          component={LoginScreen} 
        />
        <Screen 
          options={{headerShown: false}} 
          name='Register' 
          component={RegisterScreen} 
        /> 
        <Screen
          name='Home'
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  )
}

const ErrorStack = () =>{
  <NavigationContainer>
    <Navigator>
      <Screen
        name='Error'
        component={Error} 
      />
    </Navigator>
  </NavigationContainer>
}

const ProfileStack = () =>{
  <NavigationContainer>
    <Navigator>
      <Screen
        name='Profile'
        component={Profile} 
      />
    </Navigator>
  </NavigationContainer>
}

export  {MainNavigation, ErrorStack, ProfileStack}