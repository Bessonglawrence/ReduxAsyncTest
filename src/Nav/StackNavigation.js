import React from 'react';
import { View } from 'react-native';
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


const Main = createNativeStackNavigator();

const MainNavigation = () =>{
  return(
      <Main.Navigator initialRouteName='Splash' >
        <Main.Screen 
          options={{headerShown: false}} 
          name='Onboarding' 
          component={OnboardingScreen} 
        />
        <Main.Screen 
          options={{headerShown: false}} 
          name='Login' 
          component={LoginScreen} 
        />
        <Main.Screen 
          options={{headerShown: false}} 
          name='Register' 
          component={RegisterScreen} 
        /> 
        <Main.Screen
          options={{headerShown: false}} 
          name='Home'
          component={Home}
        />
        <Main.Screen 
          options={{headerShown: false}} 
          name='Splash'
          component={SplashScreen}
        />
        <Main.Screen
          name='Error'
          component={Error} 
        />

        <Main.Screen
          name='Profile'
          component={Profile} 
        />

        <Main.Screen
          name='Setting'
          component={Setting} 
        />

        <Main.Screen
          name='Weather'
          component={Weather} 
        />
      
      </Main.Navigator>
  )
}


const ProfileNav = createNativeStackNavigator();

const ProfileStack = () =>{
    <ProfileNav.Navigator>
      <ProfileNav.Screen
        name='Profile'
        component={Profile} 
      />
    </ProfileNav.Navigator>
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
const WeatherNav = createNativeStackNavigator();

const WeatherStack = () =>{
    <WeatherNav.Navigator>
      <WeatherNav.Screen
        name='Weather'
        component={Weather} 
      />
    </WeatherNav.Navigator>
}

export  {
  MainNavigation, 
  ProfileStack, 
  SettingStack, 
  WeatherStack
}