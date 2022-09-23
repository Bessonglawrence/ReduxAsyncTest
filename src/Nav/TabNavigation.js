import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigation, ErrorStack, ProfileStack, SettingStack } from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home-circle'
                                : 'home-circle-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused 
                                ? 'profile-circle' 
                                : 'profile-circle-outline';
                        } else if ( route.name === 'Setting'){
                            iconName = focused
                                ? 'setting-circle'
                                : 'setting-circle-outline'
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    })}
            >
                <Tab.Screen name='Home' component={MainNavigation} />
                <Tab.Screen name='Profile' component={ProfileStack} />
                <Tab.Screen name='Setting' component={SettingStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;