import {EditableSpan} from "../../../../../../common/components/ EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {changeTodolistTitleAC, removeTodolistAC} from "../../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../../app/hooks";
import {TodolistType} from "../../../../../../app/App";
import styles from './TodolistTitle.module.css'

type Props = {
    todolist: TodolistType
}

export const TodolistsTitle = ({todolist}: Props) => {


    const dispatch = useAppDispatch()

    const removeTodolist = () => {
        dispatch(removeTodolistAC(todolist.id))
    }


    const updateTodolist = (title: string) => {
        dispatch(changeTodolistTitleAC({id: todolist.id, title}))
    }

    return (
        <div className={styles.container}>
            <h3><EditableSpan value={todolist.title} onChange={updateTodolist}/></h3>
            <IconButton onClick={removeTodolist}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
};