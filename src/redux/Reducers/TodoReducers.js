import { Data } from "../../Data/Data";
import { ADD_TODO, REMOVE_TODO } from "../Actions/actionTypes";


const INITIAL_STATE = {todos: Data}

const handleRemoveTodo = (item, todos) =>{
    const todoIndex = todos.indexOf(item)
    todos.splice(todoIndex, 1)

    return todos;
}

const todoReducers = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case ADD_TODO:
            return {todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {todos: handleRemoveTodo(state.todos, action.payload)}
        default:
            return state;
    }
}

export default todoReducers;