import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigation, ErrorStack, ProfileStack } from './StackNavigation';

const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={MainNavigation} />
            <Tab.Screen name='Error' component={ErrorStack} />
            <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default TabNavigation;