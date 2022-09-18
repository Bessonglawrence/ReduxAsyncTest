import { Data } from "../../Data/Data";
import { ADD_TODO,REMOVE_TODO } from "../Actions/actionTypes";

const INITIAL_STATE = { todos: Data}

const handleRemove = (item, todos) =>{
    const todoIndex = todos.indexOf(item);
    todos.splice(todoIndex, 1);

    return todos;
}

const todoReducer = (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        case ADD_TODO:
            return{todos:[...state.todos, action.payload]}
        case REMOVE_TODO:
            return{ todos:[ handleRemove( action.payload, state.todos)]}
        default:
            return state;
    }
}

export default todoReducer;