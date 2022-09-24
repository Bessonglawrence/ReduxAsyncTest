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

const SettingStack = () =>{
  <NavigationContainer>
    <Navigator>
      <Screen
        name='Setting'
        component={Setting} 
      />
    </Navigator>
  </NavigationContainer>
}

const WeatherStack = () =>{
  <NavigationContainer>
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