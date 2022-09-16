import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../../components/NavBar'

const Home = () => {
  return (
    <View>
      <NavBar 
        title="Home"
        iconName='search'
       />
      <Text style={{color: 'black'}}>We are in the Home screen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})