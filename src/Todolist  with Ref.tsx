import { useRef } from "react";
import { FilterValuesType, TaskType } from "./App";
import { Button } from "./Button";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskId: string )=> void
    changeFilter:(newFilter: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType ) => {

    const inputRef = useRef<HTMLInputElement>(null)

const taskList: JSX.Element = props.tasks.length === 0
? <div>Ваш список пуст</div>
:  <ul>
    {
    props.tasks.map ((t:TaskType)=>{
     return(
       <li>
        <input type="checkbox" checked={t.isDone}/> 
        <span>{t.title}</span>
        <Button 
        title="x"
        onClickHandler={()=>props.removeTask(t.id)}/>
        
        </li>
    )
})
    }
</ul>

   const onClickAddHandler =()=> {
    if(inputRef.current) {
        if(inputRef.current.value.length<15){
        props.addTask(inputRef.current.value)
        inputRef.current.value =""
        } else{ 
            alert ("to long")
        }
       
    }
    
   }
    return (
        <div className="todolist">
        <h3>{props.title}</h3>
        <div>
            <input ref ={inputRef}
            placeholder="max lenght title 15 charters"
            />
            <Button title="+" onClickHandler={onClickAddHandler}/>
        </div>
            {taskList}
        <div>

            <Button 
            title="All"
            onClickHandler={()=>props.changeFilter("all")}
            />
            <Button 
            title="Active"
            onClickHandler={()=>props.changeFilter("active")}
            />
            <Button 
            title="Completed"
            onClickHandler={()=>props.changeFilter("completed")}
            />
           
        </div>
    </div>
);
}; 