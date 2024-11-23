<<<<<<< HEAD
import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

type TodolistType = {
	id: string
	title: string
	filter: FilterValuesType
}

export type TasksStateType = {
	[key: string]: TaskType[]
}

function App() {

	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, setTodolists] = useState<TodolistType[]>([
		{id: todolistID1, title: 'What to learn', filter: 'all'},
		{id: todolistID2, title: 'What to buy', filter: 'all'},
	])

	let [tasks, setTasks] = useState<TasksStateType>({
		[todolistID1]: [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS', isDone: true},
			{id: v1(), title: 'ReactJS', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'Rest API', isDone: true},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
	})
  //tasks
	const removeTask = (taskId: string, todolistId: string) => {
		const newTodolistTasks = {...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)}
		setTasks(newTodolistTasks)
	}

	const addTask = (title: string, todolistId: string) => {
		const newTask = {
			id: v1(),
			title: title,
			isDone: false
		}
		const newTodolistTasks = {...tasks, [todolistId]: [newTask, ...tasks[todolistId]]}
		setTasks(newTodolistTasks)
	}


	const changeTaskStatus = (taskId: string, taskStatus: boolean, todolistId: string) => {
		const newTodolistTasks = {
			...tasks,
			[todolistId]: tasks[todolistId].map(t => t.id == taskId ? {...t, isDone: taskStatus} : t)
		}
		setTasks(newTodolistTasks)
	}
	const changeTaskTitle = (taskId: string, title:string, todolistId: string) => {
		const newTodolistTasks = {
			...tasks,
			[todolistId]: tasks[todolistId].map(t => t.id == taskId ? {...t, title:title} : t)
		}
		setTasks(newTodolistTasks)
	}

	//todolist
	const changeFilter = (filter: FilterValuesType, todolistId: string) => {
		const newTodolists = todolists.map(tl => {
			return tl.id === todolistId ? {...tl, filter} : tl
		})
		setTodolists(newTodolists)
	}


	const removeTodolist = (todolistId: string) => {
		const newTodolists = todolists.filter(tl => tl.id !== todolistId)
		setTodolists(newTodolists)
		delete tasks[todolistId]
		setTasks({ ...tasks })
	}

	const addTodolist =(title:string)=>{
		const todolistID = v1()
		const newTodolist: TodolistType = {
			id: todolistID,
			title:title,
			filter: 'all'
		}
		setTodolists([...todolists, newTodolist])
		setTasks({...tasks,[todolistID]:[]})
	}

const changeTodolistTitle = (title:string, todolistId: string) => {
	const newTodolists = todolists.map(tl => {
		return tl.id === todolistId ? {...tl, title} : tl
	})
	setTodolists(newTodolists)
}


	return (
		<div className="App">
			<AddItemForm addItem={addTodolist}/>
			{todolists.map((tl) => {

				const allTodolistTasks = tasks[tl.id]
				let tasksForTodolist = allTodolistTasks

				if (tl.filter === 'active') {
					tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
				}

				if (tl.filter === 'completed') {
					tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
				}

				return <Todolist
					key={tl.id}
					todolistId={tl.id}
					title={tl.title}
					tasks={tasksForTodolist}
					removeTask={removeTask}
					changeFilter={changeFilter}
					addTask={addTask}
					changeTaskStatus={changeTaskStatus}
					filter={tl.filter}
					removeTodolist={removeTodolist}
					changeTodolistTitle={changeTodolistTitle}
					changeTaskTitle={changeTodolistTitle}
				/>
			})}
		</div>
	);
=======
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
>>>>>>> 85d3a372dc239156b7f2c35fe7f163946c2bf4ff
}

export default App;
