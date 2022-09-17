import { 
    View, 
    Text,
    TextInput, 
    TouchableOpacity,
    Dimensions
} from 'react-native'
import React from 'react'


const TodoInput = ({onPress,value,onChangeText }) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent:'space-between', marginVertical: 20}}>
      <TextInput placeholder='Enter Todo' style={styles.main} value={value} onChangeText={onChangeText}/>
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Text style={{fontSize: 20, fontWeight: 'bold',}}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles ={
    main:{
        backgroundColor: '#d8dadb',
        flex: 3,
        marginLeft: 8,
        borderRadius: 5,
        paddingLeft: 12,
        fontSize: 18,
        fontStyle: 'italic'
    },
    addButton:{
        backgroundColor: 'lightblue', 
        paddingVertical: 8, 
        paddingHorizontal: 15, 
        alignSelf: 'center',  
        borderRadius: 5, 
        marginTop: 2,
        marginHorizontal: 8
    }
}

export default TodoInput;