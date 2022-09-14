import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = ({navigation, title}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="arrow-left" color='grey' size={30}/>
      <Text style={{color: 'grey'}}>{title}</Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})