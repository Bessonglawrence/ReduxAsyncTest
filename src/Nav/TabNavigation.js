import {View, Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigation, ErrorStack, ProfileStack } from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={MainNavigation} />
                <Tab.Screen name='Error' component={ErrorStack} />
                <Tab.Screen name='Profile' component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;