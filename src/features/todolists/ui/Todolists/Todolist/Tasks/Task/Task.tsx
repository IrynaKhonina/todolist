import {ChangeEvent} from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "../../../../../../../common/components/ EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskType} from "../../../../../../../app/App";
import {useAppDispatch} from "../../../../../../../app/hooks";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../../../../model/tasks-reducer";
import {getListItemSx} from './Task.styles'

type Props = {
    task: TaskType;
    todolistId: string
};

export const Task = ({task,todolistId}: Props) => {

    const dispatch = useAppDispatch()

    const removeTaskHandler = () => {
        dispatch(removeTaskAC({taskId:task.id, todolistId}))
    };

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC({taskId:task.id, isDone: newStatusValue, todolistId}))
    };

    const changeTaskTitleHandler = (title: string) => {
        dispatch(changeTaskTitleAC({taskId:task.id, title, todolistId}))
    };






    return (


        <ListItem  sx={getListItemSx(task.isDone)}>
            <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
            </div>
            <IconButton onClick={removeTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};