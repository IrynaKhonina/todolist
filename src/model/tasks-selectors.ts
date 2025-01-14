import {RootState} from "../app/store";
import {TasksStateType} from "../AppWithRedux";

export const selectTasks=(state:RootState):TasksStateType =>state.tasks