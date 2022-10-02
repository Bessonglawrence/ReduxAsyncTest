import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    MainNavigation, 
    ProfileStack, 
    SettingStack, 
    WeatherStack 
} from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home,Profile,Weather,Setting } from '../screens';


const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
    return(
        <NavigationContainer independent={true}>
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
                                : 'setting-circle-outline';
                        } else if ( route.name === 'Weather'){
                            iconName = focused 
                                ? 'weather-circle'
                                : 'weather-circle-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#3798c8',
                    tabBarInactiveTintColor: 'gray',
                    })}
            >
                <Tab.Screen name='Home' component={MainNavigation} options={{headerShown: false}}/>
                <Tab.Screen name='Profile' component={ProfileStack} />
                <Tab.Screen name='Setting' component={SettingStack} />
                <Tab.Screen name='Weather' component={WeatherStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;