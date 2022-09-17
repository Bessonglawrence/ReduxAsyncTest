import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../../components/NavBar'
import TodoInput from '../../components/TodoInput'

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <NavBar 
        title="Home"
        iconName='search'
       />
      <TodoInput />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})