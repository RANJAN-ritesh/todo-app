import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, statusTodo } from "../redux/action";

export const TodoList = () =>{
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        const Delete = deleteTodo(id) 
        dispatch(Delete)
    }
    const handleStatus = (id)=>{
             const Status = statusTodo(id)
             dispatch(Status)
    }
    const statuss=(item)=>{
       return item ? "Done" : "Not Done"
    }
    const Multiple = ()=>{
        let narr = []
        todos.map((e)=>{
            if(e.status === true){
                narr.push(e.id)
            }
        })
        console.log(narr)
        narr.map((e)=>{
            const Delete = deleteTodo(e) 
        dispatch(Delete)
        })
        alert(`${narr.length} completed Items removed`)
    }
    // console.log(todos)
    return(
        <div className="displayI">
        <div className="itemsinput">
          {todos.map((item) =>(
              <div key={item.id}>
              <h2>{item.title}</h2>
              <h3>{statuss(item.status)}</h3>
              <button onClick={ ()=> handleDelete(item.id)}>Delete</button>
              <button onClick={()=> handleStatus(item.id)}>Change Status </button>
              </div>
          ))}
          
        </div>
        <div id="btn" >
          <button onClick={()=>Multiple()} >Delete All Completed Task</button>
        </div>

        </div>
    )
}