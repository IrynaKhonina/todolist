import List from "@mui/material/List";
import {useAppSelector} from "../../../../../../app/hooks";
import {TodolistType} from "../../../../../../app/App";
import {selectTasks} from "../../../../model/tasks-selectors";
import {Task} from "./Task/Task";

type Props = {
    todolist: TodolistType;
};

export const Tasks = ({todolist}: Props) => {


    const tasks = useAppSelector(selectTasks)


    const allTodolistTasks = tasks[todolist.id]
    let tasksForTodolist = allTodolistTasks

    if (todolist.filter === 'active') {
        tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
    }

    if (todolist.filter === 'completed') {
        tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
    }


    return (
        <>
            {tasksForTodolist.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {tasksForTodolist.map((task) => {


                        return <Task key={task.id}  task = {task} todolistId={todolist.id}/>

                    })}
                </List>
            )}
        </>
    );
};