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
        <Screen
          name='Error'
          component={Error} 
        />
        <Screen
          name='Profile'
          component={Profile} 
        />
        <Screen
          name='Setting'
          component={Setting} 
        />
        <Screen
          name='Weather'
          component={Weather} 
        />
      </Navigator>
  )
}


const Profile = createNativeStackNavigator();

const ProfileStack = () =>{
    <Profile.Navigator>
      <Profile.Screen
        name='Profile'
        component={Profile} 
      />
    </Profile.Navigator>
}

const SettingsStack = createNativeStackNavigator();

const SettingStack = () =>{
    <SettingsStack.Navigator>
      <SettingStack.Screen
        name='Setting'
        component={Setting} 
      />
    </SettingsStack.Navigator>
}
const Weather = createNativeStackNavigator();

const WeatherStack = () =>{
    <Weather.Navigator>
      <Weather.Screen
        name='Weather'
        component={Weather} 
      />
    </Weather.Navigator>
}

export  {
  MainNavigation, 
  ProfileStack, 
  SettingStack, 
  WeatherStack
}