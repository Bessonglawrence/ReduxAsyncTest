import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    Animated,
    TouchableOpacity,
    Easing
} from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = () => {

 const handleAnimation = () => {
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true
    }).start()
}

useEffect(() =>{
  handleAnimation();
},[]);

  const animatedValue = new Animated.Value(0);
  return (
    <View style={{flex: 1, justifyContent: 'center',}}>
      <Animated.Image
        source={require('../../images/splash.png')} 
        style={{
          width: 20, 
          height: 20,
          alignSelf: 'center',
          
          transform: [
            {
              translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 18]
              })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 18]
                })
            },
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 18]
                })
            },
            {
                scaleY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 18]
                })
            }
          ]
        }}
      />

        {/* <TouchableOpacity onPress={handleAnimation}>
          <Text>
              Transform Image
          </Text>
        </TouchableOpacity> */}
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})