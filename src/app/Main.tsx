import { useAppDispatch, useAppSelector } from "@/common/hooks"
import { CreateItemForm } from "@/common/components/CreateItemForm/CreateItemForm"
import { createTodolistTC } from "@/features/todolists/model/todolists-slice"
import { Todolists } from "@/features/todolists/ui/Todolists/Todolists"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { selectIsLoggedIn } from "@/features/auth/model/auth-slice.ts"
import { Path } from "@/common/routing"
import { Navigate } from "react-router"

export const Main = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const createTodolist = (title: string) => {
    dispatch(createTodolistTC(title))
  }

  if (!isLoggedIn) {
    return <Navigate to={Path.Login} />
  }


  return (
    <Container maxWidth={"lg"}>
      <Grid container sx={{ mb: "30px" }}>
        <CreateItemForm onCreateItem={createTodolist} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  )
}
