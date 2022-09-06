import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import Button from '../../components/Button';

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
      <TouchableOpacity>
        <Text style={{color: '#1393ec', fontWeight: '600', alignSelf: 'flex-end', marginVertical: 5}}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button buttonText='Login'/>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 16}}>
        <View style={{borderBottomWidth: 1.5, borderColor: 'lightgrey', width: 120, marginBottom: 8}}></View>
          <Text style={{color: 'grey', marginHorizontal: 15, fontWeight: '500',}}>OR</Text>
        <View style={{borderBottomWidth: 1.5, borderColor: 'lightgrey', width: 120, marginBottom: 8}}></View>
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
    marginVertical: 15,
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  imageStyle:{
    height: 180,
    width: 290,
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
   // marginTop: 10,
    marginBottom: 6
  }
})