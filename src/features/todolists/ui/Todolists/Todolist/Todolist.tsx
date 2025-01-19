import {AddItemForm} from "../../../../../common/components/AddItemForm/AddItemForm";
import {TodolistType} from "../../../../../app/App";
import {TodolistsTitle} from "./TodolistsTitle/TodolistsTitle";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {Tasks} from "./Tasks/Tasks";
import {addTaskAC} from "../../../model/tasks-reducer";
import {useAppDispatch} from "../../../../../app/hooks";

type PropsType = {
    todolist: TodolistType;

};

export const Todolist = (props: PropsType) => {
    const {todolist} = props;

    const dispatch = useAppDispatch()


    const addTask = (title: string) => {
        dispatch(addTaskAC({title, todolistId: todolist.id}))
    }

    return (
        <div>
            <TodolistsTitle todolist={todolist}/>
            <AddItemForm addItem={addTask}/>
            <Tasks todolist={todolist}/>
            <FilterButtons todolist={todolist}/>
        </div>
    );
};