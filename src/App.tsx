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
}

export default App;
