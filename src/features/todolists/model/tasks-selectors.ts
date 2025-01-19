import {RootState} from "../../../app/store";
import {TasksStateType} from "../../../app/App";

export const selectTasks=(state:RootState): TasksStateType =>state.tasks