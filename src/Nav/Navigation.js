import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';


const {Navigator, Screen} = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () =>{
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
      </Navigator>
      {/* <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={Home} 
          />
          <Tab.Navigator
            name='Profile'
            component={Profile} 
          />
          <Tab.Navigator
            name='Error'
            component={Error}
          />
        </Tab.Navigator> */}
    </NavigationContainer>
  )
}

export default Navigation;