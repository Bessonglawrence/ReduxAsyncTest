import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import NavBar from '../../components/NavBar'
import TodoInput from '../../components/TodoInput'
import TodoItem from '../../components/TodoItem'
import { Data } from '../../Data/Data'



const Home = () => {

  const renderItem = ({ item }) => (
    <TodoItem title={item.title} />
  );

  return (
    <View style={{flex: 1}}>
      <NavBar 
        title="Home"
        iconName='search'
       />
      <TodoInput />

      <Text style={styles.headerText}>Todos</Text>

      <FlatList
        data={Data} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  headerText:{
    color: 'grey',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '450',
    textDecorationLine: 'underline',
    marginBottom: 10
  }
})