import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({navigation,title,iconName,onBackPress, onSearchPress, backButton}) => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row'}}>
        { backButton ?
          <TouchableOpacity style={styles.backIcon} onPress={() => Alert.alert("Back button Pressed")}>
           <Icon name='arrow-back' color='grey' size={30}/>
          </TouchableOpacity>
          :
          null
        }
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={onSearchPress}>
        <Icon name={iconName} color='#3798c8' size={40}/>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#b7d8dd',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    paddingVertical: 13,
    elevation: 5,
    alignItems: 'center',
    shadowColor: '#d1d2d1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 2, 
    borderRadius: 6
  },
  headerText:{
    color: 'grey',
    fontSize: 30,
    fontWeight: '400',
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