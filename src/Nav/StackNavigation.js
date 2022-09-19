import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Home from '../screens/Home/Home';
import Error from '../screens/Error/Error';
import Profile from '../screens/Profile/Profile';
import SplashScreen from '../screens/SplashScreen/SplashScreen';


const {Navigator, Screen} = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () =>{
  return(
    <NavigationContainer>
      <Navigator initialRouteName='Splash' >
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
          options={{headerShown: false}} 
          name='Home'
          component={Home}
        />
        <Screen 
          options={{headerShown: false}} 
          name='Splash'
          component={SplashScreen}
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