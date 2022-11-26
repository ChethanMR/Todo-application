import { useState } from "react"
import "./todo.css"
export default function TodoList(){
    const [newText,setNewText]=useState("");
    const [addtask,setAddTask]=useState([]);

    const handleInputChange=(event)=>{
        setNewText(event.target.value)
    }

    const handleClick=()=>{
        let task={
            id:addtask.length===0?1:addtask[addtask.length-1].id+1,
            taskName:newText,
        }

        let newList=[...addtask,task]
        setAddTask(newList);
        resetInput();
    }

    const handleDelete=(id)=>{
        let deletedList=addtask.filter((elem)=>elem.id!==id)
        setAddTask(deletedList);
    }
    
    const resetInput=()=>{
        setNewText('');
    }


    return (
        <div className="outer-box">
            <div className="input-bar">
                <input className="task-input" onChange={handleInputChange} value={newText}/> 
                <button className="add-task-button" onClick={handleClick}>Add Task</button> 
            </div>

            <div className="add-list">
                {addtask.map((task)=>{
                return (<div className="task-list"> 
                    <span className="task-name">{task.taskName}</span> 
                    <button className="task-delete-button" onClick={()=>handleDelete(task.id)}>delete</button>
                    </div>)})}
            </div>
        </div>
    )
}