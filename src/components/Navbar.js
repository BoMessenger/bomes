import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import '../App.css'
import {NavLink} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent="flex-end">
                    {user ?
                        <div>
                            <NavLink to={PROFILE_ROUTE} style={{padding: 5}}>
                                <Button variant={"contained"}>Профиль</Button>
                            </NavLink>
                            <NavLink to={CHAT_ROUTE} style={{padding: 5}}>
                                <Button variant={"contained"}>Чат</Button>
                            </NavLink>
                            <Button onClick={() => auth.signOut()} variant={"contained"}>Выйти</Button>
                        </div>
                        :
                        <NavLink to={LOGIN_ROUTE} style={{padding: 5}}>
                            <Button variant={"contained"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;