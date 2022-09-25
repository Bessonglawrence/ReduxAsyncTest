import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { 
  OnboardingScreen, 
  LoginScreen, 
  RegisterScreen, 
  Home, 
  Error, 
  Profile,
  SplashScreen,
  Setting,
  Weather 
} from '../screens';


const {Navigator, Screen} = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () =>{
  return(
    <NavigationContainer independent={true}>
      <Navigator initialRouteName='Splash' >
        <Screen 
          options={{headerShown: false}} 
          name='Onboarding' 
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
  <NavigationContainer independent={true}>
    <Navigator>
      <Screen
        name='Error'
        component={Error} 
      />
    </Navigator>
  </NavigationContainer>
}

const ProfileStack = () =>{
  <NavigationContainer independent={true}>
    <Navigator>
      <Screen
        name='Profile'
        component={Profile} 
      />
    </Navigator>
  </NavigationContainer>
}

const SettingStack = () =>{
  <NavigationContainer independent={true}>
    <Navigator>
      <Screen
        name='Setting'
        component={Setting} 
      />
    </Navigator>
  </NavigationContainer>
}

const WeatherStack = () =>{
  <NavigationContainer independent={true}>
    <Navigator>
      <Screen
        name='Weather'
        component={Weather} 
      />
    </Navigator>
  </NavigationContainer>
}

export  {
  MainNavigation, 
  ErrorStack, 
  ProfileStack, 
  SettingStack, 
  WeatherStack
}