import {RootState} from "../app/store";
import {TodolistType} from "../AppWithRedux";


export const selectTodolists=(state:RootState):TodolistType [] =>state.todolists