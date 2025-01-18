import {RootState} from "../app/store";
import {TodolistType} from "../app/App";

export const selectTodolists=(state:RootState): TodolistType[] =>state.todolists