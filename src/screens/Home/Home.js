import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React,{useState} from 'react'
import NavBar from '../../components/NavBar'
import TodoInput from '../../components/TodoInput'
import TodoItem from '../../components/TodoItem'
import {useSelector, useDispatch} from 'react-redux'
import { AddTodo } from '../../redux/Actions/todoActions'
//import { Data } from '../../Data/Data'



const Home = () => {

  const [todo, setTodo] = useState();

  const handlAdd = () =>{
    id = Math.floor(Math.random() * 1000)
    if(todo.length > 4){
      dispatch(AddTodo({
        id: id,
        title: todo
      }))
    }
    setTodo('');
  }

  const handleDelete = ({item}) =>{
    console.log(`${item.id} delete button has been pressed`)
  }


  const renderItem = ({ item }) => (
    <TodoItem title={item.title} onPress={() => handleDelete()} />
  );

  const todos = useSelector( state => state.todoReducer)
  const Data = todos.todos;
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <NavBar 
        title="Home"
        iconName='search'
       />
      <TodoInput value={todo} onChangeText={setTodo} onPress={() => handlAdd()}/>

      <Text style={styles.headerText}>Todos</Text>

      <FlatList
        data={Data} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Home;

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