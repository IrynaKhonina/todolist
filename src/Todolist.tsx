import {FilterValuesType, TaskType} from "./App";
import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import { AddItemForm } from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
	title: string
	todolistId: string
	tasks: TaskType[]
	filter: FilterValuesType
	removeTask: (taskId: string, todolistId: string) => void
	changeFilter: (filter: FilterValuesType, todolistId: string) => void
	addTask: (title: string, todolistId: string) => void
	changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
	removeTodolist: (todolistId: string) => void
	changeTodolistTitle: (title: string, todolistId: string) => void
	changeTaskTitle : (taskId: string, title:string, todolistId: string) =>void
}

export const Todolist = (props: PropsType) => {
	const {
		title,
		tasks,
		filter,
		removeTask,
		changeFilter,
		addTask,
		changeTaskStatus,
		todolistId,
		removeTodolist,
		changeTodolistTitle,
		changeTaskTitle
	} = props

	const addTaskHandler = (taskTitle: string) => {
		addTask(taskTitle, todolistId)
	}

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter, todolistId)
	}

	const removeTodolistHandler = () => {
		removeTodolist(todolistId)
	}

	const changeTodolistTitleHandler = (newTitle: string) => {
		changeTodolistTitle(newTitle, todolistId)
	}

	return (
		<div>
			<div className={"todolist-title-container"}>
				<h3>
					<EditableSpan title={title} changeTitle={changeTodolistTitleHandler}/>
				</h3>
				<Button title={'x'} onClick={removeTodolistHandler}/>
			</div>
			<AddItemForm addItem={addTaskHandler}/>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {
							const removeTaskHandler = () => {
								removeTask(task.id, todolistId)
							}
                            const  changeTaskTitleHandler =(title:string) => {
								changeTaskTitle(task.id, title, todolistId)
							}
							const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
								const newStatusValue = e.currentTarget.checked
								changeTaskStatus(task.id, newStatusValue, todolistId)
							}

							return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
								<EditableSpan changeTitle={changeTaskTitleHandler } title={task.title}/>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button className={filter === 'all' ? 'active-filter' : ''} title={'All'}
						onClick={() => changeFilterTasksHandler('all')}/>
				<Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'}
						onClick={() => changeFilterTasksHandler('active')}/>
				<Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'}
						onClick={() => changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}