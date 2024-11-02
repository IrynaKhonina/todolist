import { useRef, useState, KeyboardEvent} from "react";
import { FilterValuesType, TaskType } from "./App";
import { Button } from "./Button";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string) => void
    removeTask: (taskId: string )=> void
    changeFilter:(newFilter: FilterValuesType) => void
    setTaskNewStatus:(taskId: string, newStatus:boolean) => void
}

export const Todolist = (props: TodolistPropsType ) => {

const [taskTitle, setTaskTitle] = useState("")  
const [taskImputError, setTaskImputError] = useState(false) 


const taskList: JSX.Element = props.tasks.length === 0
? <div>Ваш список пуст</div>
:  <ul>
    {
    props.tasks.map ((t:TaskType)=>{
     return(
       <li>
        <input type="checkbox" 
        checked={t.isDone}
        onChange={(e)=> {props.setTaskNewStatus(t.id, e.currentTarget.checked )}}
        /> 
         <span className={t.isDone ? "task-done" : "task"}>{t.title}</span>
        <Button 
        title="x"
        onClickHandler={()=>props.removeTask(t.id)}/>
        
        </li>
    )
})
    }
</ul>

   const onClickAddTaskHandler =()=> {
    const trimmedTaskTitle = taskTitle.trim()
    if(trimmedTaskTitle){
        if (isTitleLengthValid){
            props.addTask(taskTitle)
            setTaskTitle("")
        }
    }else{
        setTaskImputError(true)
        setTaskTitle("")
    }


         
    }
    const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter" ){
            onClickAddTaskHandler()
        }
    }
    const isTitleLengthValid = taskTitle.length < 15
   
    return (
        <div className="todolist">
        <h3>{props.title}</h3>
        <div>
            <input 
                   placeholder="Max 15 character"
                   value={taskTitle}
                   onChange={e=>{
                    taskImputError && setTaskImputError(false)
                    setTaskTitle(e.currentTarget.value)} 
                   } 
                   className={taskImputError ? "error" : ""}
                   onKeyDown={onKeyDownAddTaskHandler} 
                   
            />        
           
            <Button 
                title="+" 
                onClickHandler={onClickAddTaskHandler}
                isDisabled={!isTitleLengthValid}
                
                />
            { !isTitleLengthValid && <div style={{color:"red"}}>Max length title is 15 character!</div> }
            {taskImputError  && <div style={{color:"red"}}>Title is required!</div>}
            
        </div>
            {taskList}
        <div>

            <Button 
            title="All"
            clssses={props.filter === "all" ? "btn-filter-active" :""}
            onClickHandler={()=>props.changeFilter("all")}
            />
            <Button 
            title="Active"
            clssses={props.filter === "active" ? "btn-filter-active" :""}
            onClickHandler={()=>props.changeFilter("active")}
            />
            <Button 
            title="Completed"
            clssses={props.filter === "completed" ? "btn-filter-active" :""}
            onClickHandler={()=>props.changeFilter("completed")}
            />
           
        </div>
    </div>
);
}; 