import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {MenuButton} from "./MenuButton";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import {changeThemeAC} from "./app/app-reducer";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {selectThemeMode} from "./app/app-selectors";
import {getTheme} from "./common/theme/theme";


export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()
    const theme = getTheme(themeMode);


    const changeModeHandler = () => {
        dispatch(changeThemeAC(themeMode === "light" ? "dark" : 'light'));
    }
    return (

        <AppBar position="static" sx={{mb: '30px'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <div>
                    <MenuButton>Login</MenuButton>
                    <MenuButton>Logout</MenuButton>
                    <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
                    <Switch color={'default'} onChange={changeModeHandler}/>
                </div>
            </Toolbar>
        </AppBar>

    );
};