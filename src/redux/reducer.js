import { ADD_TODO, DEL_TODO,STAT_TODO } from "./actionTypes";

const initstate = {
todos:[]

};

export const reducer = (state = initstate , {type,payload})=>{
    switch(type){
        case ADD_TODO:{
            return{
                ...state,
                todos:[...state.todos,payload]
            }
        }
        case DEL_TODO:{
            return{
               ...state,
                todos : state.todos.filter((m)=> m.id !== payload)
            }
        }

        case STAT_TODO:{
            function mapped(){
                state.todos.map((m)=>{
                    if(m.id === payload){
                      if(m.status === true){
                          m.status = false
                      }else if(m.status === false){
                          m.status = true
                      }
                
                    }
                    
                })
                return state}
            mapped()
               
            return{
                ...state,
                todos:[...state.todos]
            }
        }
        default:
            return state;
    }
}

//Three