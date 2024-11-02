import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { title } from 'process';
import { v1 } from 'uuid';



export type TaskType = {
id: string
title: string
isDone: boolean

}

export type FilterValuesType = "all" | "active" | "completed"

function App() {

//BLL:
const todolistTitle = "What to learn"



const [tasks, setTasks] = useState <Array<TaskType>> ([
{id:v1(), title:"HTML&CSS", isDone: true},
{id:v1(), title:"JS", isDone: true},
{id:v1(), title:"Redax", isDone: false},

])



const removeTask = (taskId: string )=> {
    const nextState: Array<TaskType> =tasks.filter(t =>t.id!==taskId)
    setTasks(nextState)
}



const addTask =(title: string)=>{
    const newTask: TaskType={
        title: title,
        isDone: false,
        id: v1()
    }
    
const copySate =[...tasks, newTask]
setTasks (copySate)
}


const setTaskNewStatus = (taskId: string, newStatus: boolean) => {
    const nextState: TaskType[] = tasks.map(t => t.id === taskId ? {...t, isDone: newStatus} : t);
    setTasks(nextState);
  };






//GUI: 

const[filter,setFilter] = useState<FilterValuesType>("all")

let filteredTasks: Array<TaskType> = tasks 
if(filter === "active") {
    filteredTasks = tasks.filter(t =>t.isDone === false)
}
if(filter === "completed") {
    filteredTasks = tasks.filter(t =>t.isDone === true)
}

const changeFilter = (newFilter: FilterValuesType) => setFilter(newFilter)
    return (
        <div className="App">
            <Todolist 
                  title={todolistTitle}
                  tasks={filteredTasks}
                   filter={filter}
                  addTask={addTask}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  setTaskNewStatus={setTaskNewStatus}
                  />
            
        </div>
    );
}

export default App;
