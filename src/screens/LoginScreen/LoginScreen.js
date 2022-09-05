import { StyleSheet, Text, View, Image, TextInput, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.imageStyle}  source={require('../../images/handShake.png')} />
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.inputSection}>
        <Icon name='account-circle' size={30} color='grey' style={{marginRight: 15, marginTop: 8}}/>
        <TextInput style={styles.texInputStyle} placeholder='Email ID' placeholderTextColor='grey' underlineColorAndroid='#e4e5e5'/>
      </View>
      <View style={styles.inputSection}>
        <Icon name='lock' size={30} color='grey' style={{marginRight: 15, marginTop: 8}}/>
        <TextInput style={styles.texInputStyle} placeholder='Password' placeholderTextColor='grey' underlineColorAndroid='#e4e5e5'/>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white', 
    flex: 1,
    paddingHorizontal: 20
  },
  headerText:{
    marginVertical: 30,
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  imageStyle:{
    height: 300,
    width: 400,
    marginTop: 40,
    alignSelf: 'center'
  },
  texInputStyle:{
    fontSize: 18,
    width: 250,
    paddingTop: 5,
    marginBottom: 5,
    fontStyle: 'italic'
  },
  inputSection:{
    flexDirection: 'row',
    marginTop: 10
  }
})