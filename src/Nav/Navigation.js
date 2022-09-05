import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';


const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () =>{
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName='Login' >
        <Screen name='onboarding' component={OnboardingScreen}></Screen>
        <Screen name='Login' component={LoginScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;