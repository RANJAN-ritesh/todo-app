import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { addTodo } from "../redux/action";

const TodoInput = () =>{
    const [title , setTitle] = useState("");
    const dispatch = useDispatch();
    const [time,setTime] = useState("")
    const [date,setDate] = useState("")

    const handleClick = ()=>{
        if(time && date){
            const payload = {
                title,
                status:false,
                id:uuid()
            };
            
            const actionAdd = addTodo(payload);
            // console.log(actionAdd)
            dispatch(actionAdd)
        }else{
            alert("Please Fill Time And Date")
        }
        
    }
    return(
        <div className="input">
        <div> <h2 id="heading">
                TODO LIST
            </h2></div>
        <div className="mainInput">
        <input value={title} onChange={(e) => setTitle(e.target.value)}
             placeholder="Jot something down."/>
              <input type="time" min="00:00" max="24:00" onChange={(e)=>setTime(e.target.value)}/>
            <input type="date" onChange={(e)=>setDate(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
           
        </div>
    )
}
export {TodoInput};