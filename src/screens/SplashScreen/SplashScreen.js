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

const SplashScreen = ({navigation}) => {

 const handleAnimation = () => {
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true
    }).start()
}



useEffect(() =>{
  //Load Animated splace image
  handleAnimation();


  // This function fires navigation after a set time period
  const navigationTimer = setTimeout(() =>{
    navigation.replace('Home')
  }, 4000);
  return () => clearTimeout(navigationTimer);
},[]);

  const animatedValue = new Animated.Value(0);
  return (
    <View style={{flex: 1, justifyContent: 'center',}}>
      <Animated.Image
        source={require('../../images/splash.png')} 
        style={styles.splashStyle}
      />
      <Text style={styles.textStyle}>
        TEAM WORK MAKES THE DREAM WORK
      </Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  splashStyle:{
    width: 20, 
    height: 20,
    alignSelf: 'center',
    marginRight: 50,
    bottom: 30,
    
    transform: [
      {
        translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 22]
        })
      },
      {
          translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 22]
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
  },
  textStyle:{
    color: 'grey', 
    fontSize: 18, 
    alignSelf: 'center', 
    top: 150, 
    fontStyle: 'italic', 
    fontWeight: '600'
  }
})