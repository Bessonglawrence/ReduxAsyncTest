import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';


const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () =>{
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName='onboarding'>
        <Screen name='onboarding' component={OnboardingScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;