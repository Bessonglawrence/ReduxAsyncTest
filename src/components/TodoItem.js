import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';
import React from 'react'


const TodoItem = ({title, onPress}) => {
  return (
    <View style={styles.todoStyle}>
    <Text style={styles.titleText}>{title}</Text>
    <TouchableOpacity style={styles.deleteStyle} onPress={onPress}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Delete</Text>
    </TouchableOpacity>
</View>
  )
}

export default TodoItem;

const styles = StyleSheet.create({
    todoStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 4,
        borderBottomWidth: .5,
        borderColor: 'lightgrey',
        paddingBottom: 4,
    },
    deleteStyle:{
        backgroundColor: 'brown', 
        paddingHorizontal: 8, 
        paddingVertical: 10, 
        borderRadius: 5
    },
    titleText:{
        color: 'grey', 
        fontSize: 15, 
        marginTop: 8
    }
})