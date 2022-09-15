import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({navigation, title}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Icon name='arrow-left-alt' color='grey' size={30}/>
        <Text style={{color: 'grey'}}>{title}</Text>
      </View>
      <Icon name='arrow-right-alt' color='lightblue' size={40}/>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})