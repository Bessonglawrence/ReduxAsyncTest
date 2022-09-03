import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux';


const Navigation = () => {
  return (
    <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar={true} initial />
          <Scene key="onboarding" component={Onboarding} hideNavBar={true} />
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="register" component={Register} hideNavBar={true} />
 
        </Stack>
      </Router>
  )
}

export default Navigation