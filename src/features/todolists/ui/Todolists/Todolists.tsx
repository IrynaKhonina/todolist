import Grid from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import { TodolistItem } from "./TodolistItem/TodolistItem"
import { useGetTodolistsQuery } from "@/features/todolists/api/todolistsApi.ts"
import { useState } from "react"

export const Todolists = () => {
  const [skip, setSkip] = useState<boolean>(true)
  const { data: todolists } = useGetTodolistsQuery(undefined, {skip})

  const fetchTodilist=()=>{
    setSkip(false)
  }

  return (
    <>
      <div>
        <button onClick={fetchTodilist}>Fetch todolists </button>
      </div>
      {todolists?.map((todolist) => (
        <Grid key={todolist.id}>
          <Paper sx={{ p: "0 20px 20px 20px" }}>ё
            <TodolistItem todolist={todolist} />
          </Paper>
        </Grid>
      ))}
    </>
  )
}
