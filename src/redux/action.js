import { ADD_TODO,DEL_TODO,STAT_TODO} from "./actionTypes"

export const addTodo = (payload) =>{
    return{
        type:ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) =>{
    return{
        type:DEL_TODO,
        payload
    }
}

export const statusTodo = (payload) =>{
    return{
        type:STAT_TODO,
        payload
    }
}

//Two