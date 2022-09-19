import { 
    StyleSheet, 
    Text, 
    View,
    Image
} from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../images/splash.png')} 
        style={{width: 350, height: 350}}
      />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})