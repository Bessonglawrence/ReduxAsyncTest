import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux';
import {
    LoginScreen,
    OnboardingScreen,
    RegisterScreen,
} from '../screens'


const Navigation = () => {
  return (
    <Router>
        <Stack key="root">
          <Scene key="splash" component={OnboardingScreen} hideNavBar={true} initial />
          <Scene key="onboarding" component={LoginScreen} hideNavBar={true} />
          <Scene key="register" component={RegisterScreen} hideNavBar={true} />
        </Stack>
      </Router>
  )
}

export default Navigation