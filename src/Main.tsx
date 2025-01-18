import Grid from "@mui/material/Grid2";
import {AddItemForm} from "./AddItemForm";
import Container from "@mui/material/Container";
import {addTodolistAC} from "./model/todolists-reducer";
import {useAppDispatch} from "./app/hooks";
import {Todolists} from "./Todolists";


export const Main = () => {

    const dispatch = useAppDispatch()


    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title))
    }


    return (
        <Container fixed>
            <Grid container sx={{mb: '30px'}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>

            <Grid container spacing={4}>
                <Todolists/>
            </Grid>
        </Container>


    );
};