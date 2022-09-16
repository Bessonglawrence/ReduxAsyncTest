import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({navigation,title,iconName}) => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.backIcon}>
           <Icon name='arrow-back' color='grey' size={30}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.searchIcon}>
        <Icon name={iconName} color='#1393ec' size={40}/>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#e6ecf6',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    paddingVertical: 13,
    elevation: 5,
    alignItems: 'center',
    // shadowColor: '#d1d2d1',
    shadowOffset: { width: 0, height: 47 },
    // shadowOpacity: 2,
    // shadowRadius: 2, 
  },
  headerText:{
    color: 'grey',
    fontSize: 30,
    fontWeight: '600',
    marginLeft: 40,
  },
  backIcon:{
    marginTop: 2,
    backgroundColor:'white',
    padding: 5,
    borderRadius: 20
  },
  searchIcon:{
    marginRight: 5,
    marginTop: 3
  }
})